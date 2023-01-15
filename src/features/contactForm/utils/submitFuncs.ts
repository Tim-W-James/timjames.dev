import { AppDispatch } from "@app/store";
import { submitError, submitSuccess } from "@context/ContactFormSlice";
import { ContactFormSchema } from "./contactFormSchema";
import encodeContactFormData from "./encodeContactFormData";

export type FormSubmitParams = {
  data: ContactFormSchema;
  dispatch: AppDispatch;
  honeypot: string | undefined;
  captchaToken: string;
};

/**
 * Submit form to Netlify API
 */
const contactFormOnSubmit = ({
  data,
  honeypot,
  dispatch,
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
          dispatch(submitError());
          console.error(
            "Failed to submit contact form with non-200 response: " +
              `[${response.status}] - [${
                response.statusText
              }] - [${await response.text()}]`
          );
          reject("error");
        } else {
          dispatch(submitSuccess());
          resolve("success");
        }
      })
      .catch((error) => {
        dispatch(submitError());
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
  dispatch,
  captchaToken,
}: FormSubmitParams) =>
  new Promise((resolve) => {
    console.groupCollapsed("Contact form content");
    console.dir(data);
    console.info("captchaToken:", captchaToken);
    console.info("honeypot:", honeypot);
    console.groupEnd();

    dispatch(submitSuccess());
    resolve("Success");
  });

export default contactFormOnSubmit;
