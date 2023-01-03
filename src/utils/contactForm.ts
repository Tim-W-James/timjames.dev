import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";
import trim from "validator/lib/trim";
import { z } from "zod";

// Form schema, using zod for runtime type checking and validator js for
// additional validators
export const contactFormSchema = z.object({
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

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export type FormSubmitParams = {
  data: ContactFormSchema;
  setResponseState: (
    value: React.SetStateAction<"error" | "success" | undefined>
  ) => void;
  honeypot: string | undefined;
  captchaToken: string;
};

/**
 * Encode a JSON object for the request of a HTTP body using
 * application/x-www-form-urlencoded
 *
 * @param {object} data - JSON object to encode
 */
const encodeContactFormData = (data: object) =>
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

/**
 * Submit form to Netlify API
 */
export const contactFormOnSubmit = ({
  data,
  honeypot,
  setResponseState,
  captchaToken,
}: FormSubmitParams) =>
  new Promise((resolve, reject) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeContactFormData({
        "form-name": "contact",
        ...data,
        "bot-field": honeypot,
        "g-recaptcha-response": captchaToken,
      }),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          setResponseState("error");
          console.error(
            "Failed to submit contact form with non-200 response: " +
              `[${response.status}] - [${
                response.statusText
              }] - [${await response.text()}]`
          );
          reject("error");
        } else {
          setResponseState("success");
          resolve("success");
        }
      })
      .catch((error) => {
        setResponseState("error");
        console.error(
          `Failed to submit contact form: [${JSON.stringify(error)}]`
        );
        reject("error");
      });
  });

/**
 * For local development, don't make an API call and log results
 */
export const contactFormOnSubmitDev = ({
  data,
  honeypot,
  setResponseState,
  captchaToken,
}: FormSubmitParams) =>
  new Promise((resolve) => {
    console.groupCollapsed("Contact form content");
    console.dir(data);
    console.info("captchaToken:", captchaToken);
    console.info("honeypot:", honeypot);
    console.groupEnd();

    setTimeout(() => {
      setResponseState("success");
      resolve("Success");
    }, 500);
  });
