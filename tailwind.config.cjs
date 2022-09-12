/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      //brødtekster
      xs: "1rem",
      sm: "1.618rem",
      lg: "2.618rem",

      // overskrifter
      xl: "4.236rem",
      "2xl": "6.854rem",
      "3xl": "11.089rem",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
