import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  </>
);

export default App;
