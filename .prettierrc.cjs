module.exports = {
  plugins: [require.resolve("prettier-plugin-packagejson")],
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  arrowParens: "always",
  printWidth: 80,
  // ! Where possible, define in ./editorconfig
  // tabWidth: 2,
  // useTabs: false,
};
