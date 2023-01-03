module.exports = {
  extends: ["@tim-w-james", "./.eslintrc-auto-import.json"],
  plugins: ["vitest", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  overrides: [
    {
      // overrides for tests
      files: ["*.test.{ts,tsx}"],
    },
    {
      // override for storybook
      files: ["*.{stories,story}.{ts,tsx,mdx}"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
};
