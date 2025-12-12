/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1eaf5',
          400: '#335c85',
          500: '#1a4c85',
          600: '#002C5F',
          700: '#00224a',
          900: '#00152e',
        }
      }
    },
  },
  plugins: [],
}