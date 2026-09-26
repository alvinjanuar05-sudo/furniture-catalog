/** @type {import('tailwind.config').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"ProductSans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
