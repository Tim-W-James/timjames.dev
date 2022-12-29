import { withRouter } from "storybook-addon-react-router-v6";
import "../src/styles/main.scss";

export const decorators = [withRouter];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#14181f",
      },
      {
        name: "light",
        value: "#e7e9e9",
      },
    ],
  },
};
