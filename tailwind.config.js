/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "festival-orange": "#F7941D",
        "festival-blue": "#4AC2F7",
        "festival-green": "#A6E22E",
        "festival-cream": "#FFF8F0",
      },
    },
  },
  plugins: [],
};
