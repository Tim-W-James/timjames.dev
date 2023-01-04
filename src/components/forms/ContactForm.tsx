/* eslint-disable sonarjs/no-duplicate-string */
import { store } from "@app/store";
import Button from "@components/Button";
import { ContactFormStatus, updateFormData } from "@context/ContactFormSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import cn from "@styles/cssUtils";
import {
  ContactFormSchema,
  FormSubmitParams,
  contactFormSchema,
} from "@utils/contactForm";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormState, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdCheckCircle, MdError, MdInfo, MdSend } from "react-icons/md";
import { toast } from "react-toastify";

// Instant feedback to display to the user depending on the state of the form
// and response
const formStateDisplay = (
  formState: FormState<{
    email?: string | undefined;
    message: string;
    name: string;
  }>,
  responseState?: ContactFormStatus
): { message: string; icon: JSX.Element } =>
  responseState === "success"
    ? { message: "Sent!", icon: <MdCheckCircle className={cn("text-4xl")} /> }
    : responseState === "error"
    ? { message: "Error", icon: <MdError className={cn("text-4xl")} /> }
    : !formState.isValid
    ? {
        message: "Please complete the Form",
        icon: <MdInfo className={cn("text-4xl")} />,
      }
    : formState.isSubmitting ||
      (formState.isSubmitSuccessful && responseState === "notSent")
    ? {
        message: "Submitting...",
        icon: (
          <span className={cn("inline-block", "leading-0", "animate-spin")}>
            <CgSpinner className={cn("text-4xl")} />
          </span>
        ),
      }
    : {
        message: "Submit your Message",
        icon: <MdSend className={cn("text-4xl")} />,
      };

/**
 * Contact form with validation for name, email and message. Spam protection
 * with reCAPTCHA and honeypot field
 *
 * @param onSubmit - function to call when the form is submitted
 */
const ContactForm: React.FC<{
  onSubmit: (params: FormSubmitParams) => Promise<unknown>;
  showPromptOnClose?: boolean;
}> = ({ onSubmit, showPromptOnClose }) => {
  const responseState = useAppSelector((state) => state.contactForm.status);
  const initialFormData = store.getState().contactForm.formData;
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch: watchFormInput,
    // State of client-side form validation
    formState,
    setValue: setFormData,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", message: "" },
  });
  const formData = watchFormInput();

  useEffect(() => {
    const formKeys = contactFormSchema.keyof();
    Object.entries(initialFormData).forEach(([key, value]) => {
      // Need to verify the key again to keep TypeScript happy
      const parsedKey = formKeys.parse(key);
      setFormData(parsedKey, value, {
        shouldValidate: !!value,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update any changes to the form data in redux
  useEffect(() => {
    dispatch(updateFormData(formData));
  }, [dispatch, formData]);

  const isFormDisabled =
    formState.isSubmitting ||
    formState.isSubmitSuccessful ||
    !(responseState === "notSent");

  // Honeypot field to catch bots
  const [honeypot, setHoneypot] = useState<string | undefined>(undefined);

  // Google reCAPTCHA to prevent spam
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Reverify so the token doesn't go stale
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    setCaptchaToken(await executeRecaptcha("yourAction"));
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  // Ensure reCAPTCHA badge appears on top and complies with Google's TOS
  useEffect(() => {
    const badge = document.querySelector(".grecaptcha-badge");
    badge && badge.classList.add("captcha-show");
  }, [handleReCaptchaVerify]);

  // Reverify the CAPTCHA on form submission
  const onFormSubmit = (data: ContactFormSchema) => {
    handleReCaptchaVerify().then(() => {
      toast.promise(
        onSubmit({
          data,
          dispatch,
          honeypot,
          captchaToken,
        }),
        {
          pending: "Sending message...",
          success: "Message sent! 🎉",
          error: "Something went wrong, please try again",
        }
      );
    });
  };

  // Prompt the user if they try to close the page with unsaved changes
  useEffect(() => {
    if (!showPromptOnClose) {
      return () => {};
    }

    const handler = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      event.returnValue = "";
    };

    if (
      (formState.isDirty && responseState === "notSent") ||
      Object.values(formData).some((value) => !!value)
    ) {
      window.addEventListener("beforeunload", handler);

      return () => {
        window.removeEventListener("beforeunload", handler);
      };
    }

    return () => {};
  }, [formData, formState, responseState, showPromptOnClose]);

  return (
    <form
      data-netlify="true"
      id="contact-form"
      method="post"
      name="contact"
      // eslint-disable-next-line react/no-unknown-property
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {/* Honeypot field for bots */}
      {/* https://docs.netlify.com/forms/spam-filters/ */}
      <fieldset className="hidden">
        <label>
          Don&apost fill this out if you&aposre human:{" "}
          <input
            name="bot-field"
            onChange={(value) => setHoneypot(value.target.value)}
          />
        </label>
      </fieldset>

      <fieldset className={cn("flex text-lg", "flex-col")}>
        {
          //#region name
        }
        <label htmlFor="name" id="name">
          <div className={cn("flex gap-2 justify-between")}>
            <p>Name*</p>
            {formState.errors.name ? (
              <p className={cn("text-danger text-right")}>
                {formState.errors.name.message}
              </p>
            ) : null}
          </div>
        </label>
        <input
          aria-labelledby="name"
          className={cn("form-input", "form-field", {
            ["form-field-error"]: !!formState.errors.name,
          })}
          placeholder="Your name here..."
          required
          type="text"
          {...register("name")}
          disabled={isFormDisabled}
        />
        {
          //#endregion
        }
        {
          //#region email
        }
        <label htmlFor="email" id="email">
          <div className={cn("flex gap-2 justify-between")}>
            <p>Email</p>
            {formState.errors.email ? (
              <p className={cn("text-danger text-right")}>
                {formState.errors.email.message}
              </p>
            ) : null}
          </div>
        </label>
        <input
          aria-labelledby="email"
          className={cn("form-input", "form-field", {
            ["form-field-error"]: !!formState.errors.email,
          })}
          placeholder={formState.isSubmitSuccessful ? "" : "example@gmail.com"}
          {...register("email")}
          disabled={isFormDisabled}
          type="email"
        />
        {
          //#endregion
        }
        {
          //#region message
        }
        <label htmlFor="message" id="message">
          <div className={cn("flex gap-2 justify-between")}>
            <p>Message*</p>
            {formState.errors.message ? (
              <p className={cn("text-danger text-right")}>
                {formState.errors.message.message}
              </p>
            ) : null}
          </div>
        </label>
        <textarea
          aria-labelledby="message"
          className={cn("form-textarea", "form-field", {
            ["form-field-error"]: !!formState.errors.message,
          })}
          placeholder="Your message here..."
          required
          {...register("message")}
          disabled={isFormDisabled}
        />
        <Button
          className={
            formState.isSubmitting ||
            (formState.isSubmitSuccessful && responseState === "notSent")
              ? cn("!cursor-wait")
              : responseState === "success"
              ? cn("!cursor-default")
              : ""
          }
          disabled={!formState.isValid || isFormDisabled}
          icon={formStateDisplay(formState, responseState).icon}
          iconRight
          isLight
          label={formStateDisplay(formState, responseState).message}
          mode={"button"}
          type="submit"
        />
        {
          //#endregion
        }
      </fieldset>
    </form>
  );
};

export default ContactForm;
