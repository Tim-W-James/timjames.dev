import ProjectsPage from "./Projects";

export default {
  title: "Pages/Projects",
  component: ProjectsPage,
  parameters: {
    backgrounds: { disable: true },
  },
};

export const Projects = () => <ProjectsPage />;
