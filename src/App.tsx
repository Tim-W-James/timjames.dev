import Toast from "@components/utils/Toast";
import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 60 * (60 * 1000), // 1 hour
    },
  },
});

const App = () => (
  <div /* Force Google to use meta description for snippets */ data-nosnippet>
    <QueryClientProvider client={queryClient}>
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
        <Toast />
      </GoogleReCaptchaProvider>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </div>
);

export default App;
