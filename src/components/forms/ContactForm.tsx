/* eslint-disable sonarjs/no-duplicate-string */
import Button from "@components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "@styles/cssUtils";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormState, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdCheckCircle, MdError, MdInfo, MdSend } from "react-icons/md";
import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";
import trim from "validator/lib/trim";
import { z } from "zod";

// Form schema, using zod for runtime type checking and validator js for
// additional validators
const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Use at least 2 characters" })
    .max(100, { message: "Use less than 100 characters" }),
  email: z.preprocess(
    // HACK to get optional fields to work: https://stackoverflow.com/questions/73715295/react-hook-form-with-zod-resolver-optional-field
    (value) => {
      if (!value || typeof value !== "string") {
        return undefined;
      }
      return value === "" ? undefined : value;
    },
    z
      .string()
      .refine(isEmail, { message: "Please enter a valid email" })
      .optional()
  ),
  message: z
    .string()
    .min(2, { message: "Use at least 2 characters" })
    .max(300, { message: "Use less than 300 characters" }),
});

type Schema = z.infer<typeof schema>;

/**
 * Encode a JSON object for the request of a HTTP body using
 * application/x-www-form-urlencoded
 *
 * @param {object} data - JSON object to encode
 */
export const encodeContactFormData = (data: object) =>
  Object.entries(data)
    .map(
      (item) =>
        encodeURIComponent(item[0]) +
        "=" +
        encodeURIComponent(
          item[1] === undefined
            ? ""
            : // Sanitize and format data
            item[0] === "email"
            ? normalizeEmail(item[1])
            : trim(item[1])
        )
    )
    .join("&");

export type FormSubmitParams = {
  data: Schema;
  setResponseState: (
    value: React.SetStateAction<"error" | "success" | undefined>
  ) => void;
  honeypot: string | undefined;
  captchaToken: string;
};

// Instant feedback to display to the user depending on the state of the form
// and response
const formStateDisplay = (
  formState: FormState<{
    email?: string | undefined;
    message: string;
    name: string;
  }>,
  responseState?: "success" | "error" | undefined
): { message: string; icon: JSX.Element } =>
  !formState.isValid
    ? {
        message: "Please complete the Form",
        icon: <MdInfo className={cn("text-4xl")} />,
      }
    : formState.isSubmitting || (formState.isSubmitSuccessful && !responseState)
    ? {
        message: "Submitting...",
        icon: (
          <span className={cn("inline-block", "leading-0", "animate-spin")}>
            <CgSpinner className={cn("text-4xl")} />
          </span>
        ),
      }
    : formState.isSubmitSuccessful
    ? responseState === "success"
      ? { message: "Sent!", icon: <MdCheckCircle className={cn("text-4xl")} /> }
      : { message: "Error", icon: <MdError className={cn("text-4xl")} /> }
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
  onSubmit: (params: FormSubmitParams) => void;
}> = ({ onSubmit }) => {
  // State of the response from the server
  const [responseState, setResponseState] = useState<
    "success" | "error" | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    // State of client-side form validation
    formState: formState,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

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
  const onFormSubmit = (data: Schema) => {
    handleReCaptchaVerify().then(() => {
      onSubmit({ data, setResponseState, honeypot, captchaToken });
    });
  };

  return (
    <>
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
          <label htmlFor="name">
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
            className={cn("form-input", "form-field", {
              ["form-field-error"]: !!formState.errors.name,
            })}
            placeholder="John Doe"
            required
            {...register("name")}
            disabled={formState.isSubmitting || formState.isSubmitSuccessful}
          />

          <label htmlFor="email">
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
            className={cn("form-input", "form-field", {
              ["form-field-error"]: !!formState.errors.email,
            })}
            placeholder="john@gmail.com"
            {...register("email")}
            disabled={formState.isSubmitting || formState.isSubmitSuccessful}
          />

          <label htmlFor="message">
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
            className={cn("form-textarea", "form-field", {
              ["form-field-error"]: !!formState.errors.message,
            })}
            placeholder="Hello!"
            required
            {...register("message")}
            disabled={formState.isSubmitting || formState.isSubmitSuccessful}
          />

          <Button
            className={
              formState.isSubmitting ||
              (formState.isSubmitted && !responseState)
                ? cn("!cursor-wait")
                : responseState === "success"
                ? cn("!cursor-default")
                : ""
            }
            disabled={
              !formState.isValid ||
              formState.isSubmitting ||
              formState.isSubmitSuccessful
            }
            icon={formStateDisplay(formState, responseState).icon}
            iconRight
            isLight
            label={formStateDisplay(formState, responseState).message}
            mode={"button"}
            type="submit"
          />
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
