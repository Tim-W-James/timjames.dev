/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-brand": "hsl(180deg 56% 21%)",
        "light-shades": "hsl(180deg 5% 91%)",
        "light-accent": "hsl(185deg 46% 52%)",
        "dark-shades": "hsl(218deg 22% 10%)",
        "dark-accent": "hsl(193deg 22% 60%)",
        danger: "hsl(4deg 90% 58%)",
        warning: "hsl(40deg 76% 41%)",
        success: "hsl(134deg 42% 41%)",
        placeholder: "hsl(218deg 22% 30%)",
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["source-code-pro", ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        "1/3": "33%",
        "2/3": "66%",
      },
      minWidth: {
        "1/10": "10%",
      },
      minHeight: {
        10: "2.5rem",
      },
      lineHeight: {
        0: "0",
      },
      flexBasis: {
        content: "content",
        "min-content": "min-content",
      },
      aspectRatio: {
        wide: "2 / 1",
      },
    },
  },
};
