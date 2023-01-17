import Footer from "@components/layout/Footer";
import Page from "@components/layout/Page";
import Navbar from "@components/layout/nav/Navbar";
import ScrollToTop from "@components/utils/ScrollToTop";
import { BLOG } from "@constants/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./Blog";

export default {
  component: BlogPage,
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

export const Blog = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Page
        content={<BlogPage />}
        description={BLOG.description}
        title={BLOG.title}
      />
      <Footer allowFixed />
    </Router>
  </QueryClientProvider>
);
