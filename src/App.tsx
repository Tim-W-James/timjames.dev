import "react-toastify/dist/ReactToastify.css";

import Toast from "@components/utils/Toast";
import { useAnnounceNavigation } from "@hooks/useAnnounceNavigation";
import { useResetFocusNavigation } from "@hooks/useFocusElement";
import background from "@images/bg-aurora.jpg";
import Footer from "@layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("@layout/nav/Navbar"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      gcTime: 60 * (60 * 1000), // 1 hour
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
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer allowFixed />
        <Toast />
        {import.meta.env.DEV ? (
          <ReactQueryDevtools
            buttonPosition="bottom-left"
            initialIsOpen={false}
          />
        ) : null}
      </QueryClientProvider>
    </div>
  );
};

export default App;
