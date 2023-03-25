import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/nav/Navbar";
import ScrollToTop from "@components/utils/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

import NotFoundPage from "./NotFound";

export default {
  component: NotFoundPage,
  controls: { hideNoControlsWarning: true },
};

export const NotFound = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <NotFoundPage />
    <Footer allowFixed />
  </Router>
);
