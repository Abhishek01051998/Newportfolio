/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,js,ts,tsx}",
    "./components/**/*.{jsx,js,ts,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar'),],
}
