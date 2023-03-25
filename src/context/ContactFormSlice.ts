import type { RootState } from "@app/store";
// eslint-disable-next-line max-len
import { ContactFormSchema } from "@features/contactForm/utils/contactFormSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContactFormStatus = "notSent" | "success" | "error";

type ContactFormState = {
  formData: ContactFormSchema;
  status: ContactFormStatus;
};

const initialState: ContactFormState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
  status: "notSent",
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<ContactFormSchema>) => {
      state.formData = { ...action.payload };
    },
    submitSuccess: (state) => {
      state.status = "success";
    },
    submitError: (state) => {
      state.status = "error";
    },
  },
});

export const { submitSuccess, submitError, updateFormData } =
  contactFormSlice.actions;

export const selectContactForm = (state: RootState) => state.contactForm;

export default contactFormSlice.reducer;
