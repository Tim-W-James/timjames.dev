import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <GoogleReCaptchaProvider
      container={{
        element: "captcha-container",
        parameters: {
          badge: "bottomright",
          theme: "dark",
        },
      }}
      reCaptchaKey={import.meta.env["VITE_SITE_RECAPTCHA_KEY"] || ""}
    >
      <Navbar />
      <Outlet />
      <Footer allowFixed />
      <div id="captcha-container" />
    </GoogleReCaptchaProvider>
  </>
);

export default App;
