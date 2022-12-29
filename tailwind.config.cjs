/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["source-code-pro", ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        "1/3": "33%",
        "2/3": "66%",
      },
    },
  },
};
