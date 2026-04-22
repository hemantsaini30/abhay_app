// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom color palette for the institute
      colors: {
        navy: {
          900: "#0a0f2e",
          800: "#0d1540",
          700: "#111d5e",
          600: "#1a2a7a",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      // Custom font families
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};