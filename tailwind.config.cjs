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
        "inline-code-bg": "hsl(220, 13%, 18%)",
        "block-code-bg": "hsl(220, 13%, 18%)",
        "code-text": "hsl(180deg 5% 91%)",
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["source-code-pro", ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            pre: {
              backgroundColor: theme("colors.block-code-bg"),
              color: theme("colors.code-text"),
            },
            code: {
              backgroundColor: theme("colors.inline-code-bg"),
              color: theme("colors.code-text"),
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
          },
        },
      }),
      maxWidth: {
        "1/3": "33%",
        "2/3": "66%",
      },
      minWidth: {
        "1/10": "10%",
        sm: "24rem",
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
      padding: {
        "1/10": "10%",
      },
    },
  },
};
