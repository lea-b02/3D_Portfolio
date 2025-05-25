/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // colors: {
      //   primary: "#050816",
      //   secondary: "#aaa6c3",
      //   tertiary: "#151030",
      //   "black-100": "#100d25",
      //   "black-200": "#090325",
      //   "white-100": "#f3f3f3",
      // },
        colors: {
        primary: "#0d0d0d",        // noir neutre très foncé
        secondary: "#e6e6e6",      // gris très foncé
        tertiary: "#0A1F50",       //bleu nuit
        "black-100": "#107dac",    // gris anthracite clair
        "black-200": "#189ad3",    // gris anthracite moyen
        "white-100": "#f3f3f3",    // blanc doux pour contraste éventuel
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg002.png')",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};