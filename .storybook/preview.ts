import "react-toastify/dist/ReactToastify.css";
import "../src/styles/main.scss";
import "./main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
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
