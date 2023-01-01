/* eslint-disable sonarjs/no-duplicate-string */
import Button from "@components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import cn, { cnScoped } from "@styles/cssUtils";
import { FormState, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { MdCheckCircle, MdError, MdInfo, MdSend } from "react-icons/md";
import isEmail from "validator/lib/isEmail";
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

  const onSubmit = () => {
    // Netlify will create an actual submission, so this is a mock to
    // provide some visual feedback. Note that we can't provide feedback if the
    // Netlify form fails
    // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
    setIsResponseSuccess("pending");
    setTimeout(() => {
      setIsResponseSuccess("success");
    }, 500);
  };

  return (
    <form method="post" name="contact" onSubmit={handleSubmit(onSubmit)}>
      {/* Needed for Netlify post-processing bots */}
      <input name="form-name" type="hidden" value="contact" />
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
