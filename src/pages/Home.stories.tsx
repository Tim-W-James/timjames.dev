import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/nav/Navbar";
import Page from "@components/layout/Page";
import ScrollToTop from "@components/utils/ScrollToTop";
import { HOME } from "@constants/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./Home";

export default {
  component: HomePage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 60 * (60 * 1000), // 1 hour
    },
  },
});

export const Home = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Page description={HOME.description} nonStandardLayout title={HOME.title}>
        <HomePage />
      </Page>
      <Footer allowFixed />
    </Router>
  </QueryClientProvider>
);
