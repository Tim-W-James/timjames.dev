import isEmail from "validator/lib/isEmail";
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
