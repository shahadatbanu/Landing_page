/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(45deg)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite', // you can create multiple durations if needed
        floatSlow: 'float 15s ease-in-out infinite',
        floatSlower: 'float 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
