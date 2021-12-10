const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "about-img": "url('')",
      },
      colors: {
        // Play Game綠
        green: colors.trueGreen,
        green: {
          100: "#A4D05D",
        },
        // 主題藍
        blue: colors.trueBlue,
        blue: {
          100: "#4F5FAC",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
