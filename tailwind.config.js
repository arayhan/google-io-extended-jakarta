const materialColor = require("./src/utils/material.colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: materialColor.COLORS,
      fontFamily: {
        primary: ["Google Sans Display", "sans-serif", "Roboto"],
        secondary: ["Plus Jakarta Sans", "sans-serif", "Roboto"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
