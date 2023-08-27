import "react-toastify/dist/ReactToastify.css";

import Toast from "@components/utils/Toast";
import { useAnnounceNavigation } from "@hooks/useAnnounceNavigation";
import { useResetFocusNavigation } from "@hooks/useFocusElement";
import background from "@images/bg-aurora.jpg";
import Footer from "@layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("@layout/nav/Navbar"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 60 * (60 * 1000), // 1 hour
    },
  },
});

const App: React.FC = () => {
  // HACK to ensure Netlify can inject the Cloudinary URL
  document.body.style.backgroundImage = `url(${background})`;

  // Accessibility hooks
  useAnnounceNavigation();
  useResetFocusNavigation();

  return (
    <div
      /* Force Google to use custom meta description for snippets */
      data-nosnippet
    >
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
};

export default App;
