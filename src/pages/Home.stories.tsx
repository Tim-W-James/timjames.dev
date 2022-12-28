import HomePage from "./Home";

export default {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    backgrounds: { disable: true },
  },
};

export const Home = () => <HomePage />;
