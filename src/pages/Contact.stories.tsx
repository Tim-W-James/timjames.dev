import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/nav/Navbar";
import Page from "@components/layout/Page";
import ScrollToTop from "@components/utils/ScrollToTop";
import Toast from "@components/utils/Toast";
import { CONTACT } from "@constants/routes";
import contactFormReducer from "@context/ContactFormSlice";
import { configureStore } from "@reduxjs/toolkit";
import cn from "@styles/cssUtils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ContactPage from "./Contact";

export default {
  component: ContactPage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Contact = () => (
  <Provider
    store={configureStore({
      reducer: {
        contactForm: contactFormReducer,
      },
    })}
  >
    <Router>
      <GoogleReCaptchaProvider
        container={{
          element: "captcha-container",
          parameters: {
            badge: "bottomright",
            theme: "dark",
          },
        }}
        reCaptchaKey={import.meta.env["STORYBOOK_SITE_RECAPTCHA_KEY"] || ""}
      >
        <ScrollToTop />
        <Navbar />
        <Page description={CONTACT.description} title={CONTACT.title}>
          <ContactPage />
        </Page>
        <Footer allowFixed />
        <div className={cn("captcha-show")} id="captcha-container" />
        <Toast />
      </GoogleReCaptchaProvider>
    </Router>
  </Provider>
);
