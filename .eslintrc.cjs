module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: ["vitest"],
  extends: [
    "@tim-w-james",
    "plugin:tailwindcss/recommended",
    "plugin:vitest/recommended",
    "plugin:storybook/recommended",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    "import/no-default-export": "off",
    "jsdoc/require-jsdoc": "off",
    "tailwindcss/classnames-order": [
      "warn",
      {
        callees: [
          "classnames",
          "clsx",
          "ctl",
          "cn",
          "cnScoped",
          "cnScopedUnion",
        ],
      },
    ],
  },
};
