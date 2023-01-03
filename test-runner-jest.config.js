import { getJestConfig } from "@storybook/test-runner";

export default {
  ...getJestConfig(),
  // HACK Using Storybook's test runner, a React component (react-select) uses
  // promises which do not resolve, causing Jest to hang. Jest has a force exit
  // option in it's CLI, but the Storybook test runner does not expose it.
  globalTeardown: "./.storybook/teardown.js",
  // HACK Long timeout to reduce risk of flaky tests in CI
  testTimeout: 25000,
};
