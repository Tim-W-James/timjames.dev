module.exports = {
  extends: ["@tim-w-james", "./.eslintrc-auto-import.json"],
  plugins: ["vitest", "react-refresh"],
  rules: {
    "no-alert": "error",
    "react-refresh/only-export-components": "warn",
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message:
          "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],
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
