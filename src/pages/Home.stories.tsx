import Footer from "@components/layout/Footer";
import Page from "@components/layout/Page";
import Navbar from "@components/layout/nav/Navbar";
import ScrollToTop from "@components/utils/ScrollToTop";
import { HOME } from "@constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Home";

export default {
  component: HomePage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Home = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Page
      content={<HomePage />}
      description={HOME.description}
      nonStandardLayout
      title={HOME.title}
    />
    <Footer allowFixed />
  </Router>
);
