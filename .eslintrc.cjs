module.exports = {
  extends: [
    "@tim-w-james",
    "plugin:tailwindcss/recommended",
    "plugin:vitest/recommended",
    "./.eslintrc-auto-import.json",
  ],
  plugins: ["vitest"],
  rules: {
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
