import { mergeConfig } from "vite";

export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-react-router-v6",
  ],
  framework: "@storybook/react-vite",
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.BASE_PATH || config.base,
    });
  },
};
