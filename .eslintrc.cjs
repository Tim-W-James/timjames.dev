module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  extends: [
    "@tim-w-james",
    "plugin:tailwindcss/recommended",
    "plugin:vitest/recommended",
    "./.eslintrc-auto-import.json",
  ],
  plugins: ["vitest"],
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
