import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/nav/Navbar";
import Page from "@components/layout/Page";
import ScrollToTop from "@components/utils/ScrollToTop";
import { PROJECTS } from "@constants/routes";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectsPage from "./Projects";

export default {
  component: ProjectsPage,
  parameters: {
    backgrounds: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Projects = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Page description={PROJECTS.description} title={PROJECTS.title}>
      <ProjectsPage />
    </Page>
    <Footer allowFixed />
  </Router>
);
