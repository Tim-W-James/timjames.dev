module.exports = {
  extends: ["@tim-w-james", "./.eslintrc-auto-import.json"],
  plugins: ["vitest"],
  rules: {
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
