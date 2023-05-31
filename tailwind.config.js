/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#37AB48',
        'gray': '#363535',
      },
      backgroundImage: {
        // 'main-bg': "url('/images/main-bg.png')",
      }
    },
  },
  plugins: [],
}

