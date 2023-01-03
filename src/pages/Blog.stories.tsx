import Footer from "@components/layout/Footer";
import Page from "@components/layout/Page";
import Navbar from "@components/layout/nav/Navbar";
import ScrollToTop from "@components/utils/ScrollToTop";
import { BLOG } from "@constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./Blog";

export default {
  component: BlogPage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Blog = () => (
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
);
