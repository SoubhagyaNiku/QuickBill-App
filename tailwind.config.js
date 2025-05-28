/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600 for primary buttons
          dark: '#1d4ed8',   // blue-700 for hover states
        },
        accent: {
          DEFAULT: '#facc15', // yellow-400 for highlights (Amazon-inspired)
          dark: '#eab308',   // yellow-500 for hover
        },
      },
    },
  },
  plugins: [],
}