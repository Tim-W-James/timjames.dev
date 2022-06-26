module.exports = {
  overrides: [
    {
      files: ["*"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "airbnb-typescript",
        "plugin:sonarjs/recommended",
        "plugin:prettier/recommended",
        "../.eslintrc-auto-import.json",
      ],
      plugins: ["@typescript-eslint", "sonarjs", "prettier", "vitest"],
    },
  ],
};
