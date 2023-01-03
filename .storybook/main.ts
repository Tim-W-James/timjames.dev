export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  // HACK - see https://github.com/storybookjs/storybook/issues/13795
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },
};
