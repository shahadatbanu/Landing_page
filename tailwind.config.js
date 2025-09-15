/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0) scale(0.5)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-20px) scale(1)", opacity: "0" },
        },
      },
      animation: {
        bubble: "bubble 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
