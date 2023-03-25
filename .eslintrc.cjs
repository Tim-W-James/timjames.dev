module.exports = {
  extends: [
    "@tim-w-james",
    "plugin:tailwindcss/recommended",
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
    "vitest/prefer-lowercase-title": "warn",
    "vitest/no-identical-title": "warn",
    "vitest/no-skipped-tests": "warn",
    "vitest/max-nested-describe": [
      "warn",
      {
        max: 3,
      },
    ],
  },
};
