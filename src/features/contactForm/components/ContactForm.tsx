/* eslint-disable sonarjs/no-duplicate-string */
import { store } from "@app/store";
import Button from "@components/buttons/Button";
import { ContactFormStatus, updateFormData } from "@context/ContactFormSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import cn from "@styles/cssUtils";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormState, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdCheckCircle, MdError, MdInfo, MdSend } from "react-icons/md";
import { toast } from "react-toastify";

import {
  ContactFormSchema,
  contactFormSchema,
} from "../utils/contactFormSchema";
import { FormSubmitParams } from "../utils/submitFuncs";

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
            message: "Please complete the form",
            icon: <MdInfo className={cn("text-4xl")} />,
          }
        : formState.isSubmitting ||
            (formState.isSubmitSuccessful && responseState === "notSent")
          ? {
              message: "Submitting...",
              icon: (
                <span
                  className={cn("inline-block", "leading-0", "animate-spin")}
                >
                  <CgSpinner className={cn("text-4xl")} />
                </span>
              ),
            }
          : {
              message: "Submit your message",
              icon: <MdSend className={cn("text-4xl")} />,
            };

type ContactFormProps = {
  onSubmit: (params: FormSubmitParams) => Promise<unknown>;
  showPromptOnClose?: boolean;
};

/**
 * Contact form with validation for name, email and message. Spam protection
 * with reCAPTCHA and honeypot field
 */
const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  showPromptOnClose,
}) => {
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
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { name: "", email: "", message: "" },
  });
  const formData = watchFormInput();

  useEffect(() => {
    const formKeys = contactFormSchema.keyof();
    Object.entries(initialFormData).forEach(([key, value]) => {
      // Need to verify the key again to keep TypeScript happy
      const parsedKey = formKeys.parse(key);
      setFormData(parsedKey, value, {
        shouldValidate: Boolean(value),
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
    void handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  // Ensure reCAPTCHA badge appears on top and complies with Google's TOS
  useEffect(() => {
    const badge = document.querySelector(".grecaptcha-badge");
    badge?.classList.add("captcha-show");
  }, [handleReCaptchaVerify]);

  // Reverify the CAPTCHA on form submission
  const onFormSubmit = (data: ContactFormSchema) => {
    void handleReCaptchaVerify().then(() => {
      void toast.promise(
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
      (formState.isDirty ||
        Object.values(formData).some((value) => Boolean(value))) &&
      responseState === "notSent"
    ) {
      window.addEventListener("beforeunload", handler);

      return () => {
        window.removeEventListener("beforeunload", handler);
      };
    }

    return () => {};
  }, [formData, formState, responseState, showPromptOnClose]);

  const honeypotFunc = useCallback(
    (value: React.ChangeEvent<HTMLInputElement>) =>
      setHoneypot(value.target.value),
    []
  );

  return (
    <form
      data-netlify="true"
      id="contact-form"
      method="post"
      name="contact"
      // eslint-disable-next-line react/no-unknown-property
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {/* Honeypot field for bots */}
      {/* https://docs.netlify.com/forms/spam-filters/ */}
      <fieldset className="hidden">
        <label>
          Don&apost fill this out if you&aposre human:{" "}
          <input name="bot-field" onChange={honeypotFunc} />
        </label>
      </fieldset>

      <fieldset
        aria-label="Contact Form"
        className={cn("flex text-lg", "flex-col")}
      >
        {
          //#region name
        }
        <label htmlFor="name">
          <div className={cn("flex justify-between gap-2")}>
            <p id="nameLabel">Name *</p>
            {formState.errors.name ? (
              <p className={cn("text-right text-danger")}>
                {formState.errors.name.message}
              </p>
            ) : null}
          </div>
        </label>
        <input
          aria-invalid={Boolean(formState.errors.name)}
          className={cn("form-input", "form-field", {
            ["form-field-error"]: Boolean(formState.errors.name),
          })}
          id="name"
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
        <label htmlFor="email">
          <div className={cn("flex justify-between gap-2")}>
            <p id="emailLabel">Email</p>
            {formState.errors.email ? (
              <p className={cn("text-right text-danger")}>
                {formState.errors.email.message}
              </p>
            ) : null}
          </div>
        </label>
        <input
          aria-invalid={Boolean(formState.errors.email)}
          className={cn("form-input", "form-field", {
            ["form-field-error"]: Boolean(formState.errors.email),
          })}
          id="email"
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
        <label htmlFor="message">
          <div className={cn("flex justify-between gap-2")}>
            <p>Message *</p>
            {formState.errors.message ? (
              <p className={cn("text-right text-danger")}>
                {formState.errors.message.message}
              </p>
            ) : null}
          </div>
        </label>
        <textarea
          aria-invalid={Boolean(formState.errors.message)}
          className={cn("form-textarea", "form-field", {
            ["form-field-error"]: Boolean(formState.errors.message),
          })}
          id="message"
          placeholder="Your message here..."
          required
          {...register("message")}
          disabled={isFormDisabled}
        />
        <Button
          appearInactive={!formState.isValid || isFormDisabled}
          childProps={{ type: "submit" }}
          className={
            formState.isSubmitting ||
            (formState.isSubmitSuccessful && responseState === "notSent")
              ? cn("!cursor-wait")
              : responseState === "success"
                ? cn("!cursor-default")
                : ""
          }
          disabled={isFormDisabled}
          icon={formStateDisplay(formState, responseState).icon}
          iconRight
          isLight
          label={formStateDisplay(formState, responseState).message}
          mode="button"
        />
        {
          //#endregion
        }
      </fieldset>
    </form>
  );
};

export default ContactForm;
