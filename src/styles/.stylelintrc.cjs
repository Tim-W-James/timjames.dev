module.exports = {
  extends: "../../.stylelintrc.cjs",
  rules: {
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: "Expected class name to be kebab-case",
      },
    ],
  },
};
