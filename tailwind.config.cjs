/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        glitch_baggrund: "url('img/glitch_baggrund.webp')",
      },
    },
    cursor: {
      mincursor: "url(img/cursor.png) 25 25, pointer",
    },
    fontSize: {
      //brødtekster
      mobilebread: "0.58rem",
      teenytiny: "0.5rem",
      tiny: "0.618rem",
      xs: "1rem",
      sm: "1.618rem",
      lg: "2.618rem",

      // overskrifter
      mobilehead: "1.3rem",
      xl: "4.236rem",
      "2xl": "6.854rem",
      "3xl": "11.089rem",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
