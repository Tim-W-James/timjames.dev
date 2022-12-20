module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-idiomatic-order",
  ],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "selector-class-pattern": [
      "^_[a-z][a-zA-Z0-9]+$",
      {
        message:
          "Expected class name to be prefixed with '_' and be lowerCamelCase",
      },
    ],
    "unit-allowed-list": [
      "rem",
      "em",
      "vh",
      "vw",
      "vmin",
      "vmax",
      "px",
      "%",
      "ms",
      "deg",
      "ex",
    ],
    "color-named": "always-where-possible",
    "color-no-hex": true,
    "color-function-notation": "modern",
    "length-zero-no-unit": true,
    "font-weight-notation": "named-where-possible",
    "declaration-no-important": true,
    "no-descending-specificity": [
      true,
      {
        ignore: ["selectors-within-list"],
      },
    ],
    "alpha-value-notation": ["percentage", { exceptProperties: ["opacity"] }],
    "css-modules/no-global-scoped-selector": [
      true,
      { fileExtensions: [".module.css", ".module.scss"] },
    ],
  },
  plugins: [
    "stylelint-order",
    "stylelint-css-modules-no-global-scoped-selector",
  ],
  ignoreFiles: ["./dist", "./storybook-static"],
};
