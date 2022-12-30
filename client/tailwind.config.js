/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      boxShadow: {
        secondary:
          "10px 10px 20px rgba(2, 2, 2, 0.25)",
      },
      colors: {
        Dark: "#080a0b",
        primary: "#372948",
        secondary: "#2c2b2b",
        accent: "#e6e2dc",
        accent2: "#fffdf9",
      },
    },
  },
  plugins: [],
};
