/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': '1535px',
      'xl': '1279px',
      'lg': '1023px',
      'md': '767px',
      'sm': '350px',
    },
    extend: {},
  },
  plugins: [],
}