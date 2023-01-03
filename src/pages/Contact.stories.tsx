import Footer from "@components/layout/Footer";
import Page from "@components/layout/Page";
import Navbar from "@components/layout/nav/Navbar";
import ScrollToTop from "@components/utils/ScrollToTop";
import { CONTACT } from "@constants/routes";
import cn from "@styles/cssUtils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContactPage from "./Contact";

export default {
  component: ContactPage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Contact = () => (
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
      <Page
        content={<ContactPage />}
        description={CONTACT.description}
        title={CONTACT.title}
      />
      <Footer allowFixed />
      <div className={cn("captcha-show")} id="captcha-container" />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="dark"
      />
    </GoogleReCaptchaProvider>
  </Router>
);
