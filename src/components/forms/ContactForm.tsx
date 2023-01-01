/* eslint-disable sonarjs/no-duplicate-string */
import Button from "@components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import cn, { cnScoped } from "@styles/cssUtils";
import { FormState, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdCheckCircle, MdError, MdInfo, MdSend } from "react-icons/md";
import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";
import trim from "validator/lib/trim";
import { z } from "zod";
import styles, { ClassNames } from "./ContactForm.module.scss";

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

const encode = (data: object) => {
  console.log("data", data);
  return Object.entries(data)
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
};

type Schema = z.infer<typeof schema>;

const formStateDisplay = (
  formState: FormState<{
    email?: string | undefined;
    message: string;
    name: string;
  }>,
  responseState?: "success" | "error" | "pending"
): { message: string; icon: JSX.Element } =>
  !formState.isValid
    ? { message: "Please complete the Form", icon: <MdInfo /> }
    : formState.isSubmitting ||
      (formState.isSubmitSuccessful && responseState === "pending")
    ? {
        message: "Submitting...",
        icon: (
          <span className={cn("inline-block", "leading-0", "animate-spin")}>
            <CgSpinner />
          </span>
        ),
      }
    : formState.isSubmitSuccessful
    ? responseState === "success"
      ? { message: "Sent!", icon: <MdCheckCircle /> }
      : { message: "Error", icon: <MdError /> }
    : { message: "Submit your Message", icon: <MdSend /> };

// eslint-disable-next-line sonarjs/cognitive-complexity
const ContactForm: React.FC = () => {
  const [isResponseSuccess, setIsResponseSuccess] = useState<
    "success" | "error" | "pending"
  >("pending");

  const {
    register,
    handleSubmit,
    formState: formState,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: Schema) => {
    setIsResponseSuccess("pending");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          setIsResponseSuccess("error");
          console.error(
            "Failed to submit contact form with non-200 response: " +
              `[${response.status}] - [${
                response.statusText
              }] - [${await response.text()}]`
          );
        } else {
          setIsResponseSuccess("success");
        }
      })
      .catch((error) => {
        setIsResponseSuccess("error");
        console.error(
          `Failed to submit contact form: [${JSON.stringify(error)}]`
        );
      });
  };

  return (
    <form method="post" name="contact" onSubmit={handleSubmit(onSubmit)}>
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
          className={cnScoped<ClassNames>()(
            "form-input",
            "text-dark-shades focus:ring mb-2",
            "disabled:bg-slate-300 disabled:border-dark-shades",
            "rounded-md",
            "border-dark-accent",
            "focus:border-dark-accent",
            "focus:ring-light-accent",
            { [styles._errorField]: !!formState.errors.name }
          )}
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
          className={cnScoped<ClassNames>()(
            "form-input",
            "text-dark-shades focus:ring mb-2",
            "disabled:bg-slate-300 disabled:border-dark-shades",
            "rounded-md",
            "border-dark-accent",
            "focus:border-dark-accent",
            "focus:ring-light-accent",
            { [styles._errorField]: !!formState.errors.email }
          )}
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
          className={cnScoped<ClassNames>()(
            "form-textarea",
            "text-dark-shades focus:ring mb-4",
            "disabled:bg-slate-300 disabled:border-dark-shades",
            "rounded-md",
            "border-dark-accent",
            "focus:border-dark-accent",
            "focus:ring-light-accent",
            { [styles._errorField]: !!formState.errors.message }
          )}
          placeholder="Hello!"
          required
          {...register("message")}
          disabled={formState.isSubmitting || formState.isSubmitSuccessful}
        />

        <Button
          disabled={
            !formState.isValid ||
            formState.isSubmitting ||
            formState.isSubmitSuccessful
          }
          icon={formStateDisplay(formState, isResponseSuccess).icon}
          iconRight
          isLight
          label={formStateDisplay(formState, isResponseSuccess).message}
          mode={"button"}
          type="submit"
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;
