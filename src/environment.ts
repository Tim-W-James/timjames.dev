import { cleanEnv, str } from "envalid";

// Example key from https://developers.google.com/recaptcha/docs/faq
// eslint-disable-next-line no-secrets/no-secrets
const recaptchaExampleKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

/**
 * Environment variables available for the app.
 */
export const envs = cleanEnv(import.meta.env, {
  VITE_SITE_RECAPTCHA_KEY: str({
    desc: "Google reCAPTCHA v3 site key",
    example: recaptchaExampleKey,
    default: recaptchaExampleKey,
  }),
});
