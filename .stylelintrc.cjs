module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-idiomatic-order",
  ],
  rules: {
    "unit-allowed-list": [
      "em",
      "rem",
      "ch",
      "vh",
      "vw",
      "vmin",
      "vmax",
      "px",
      "%",
      "s",
      "deg",
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
