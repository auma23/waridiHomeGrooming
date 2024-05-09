/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        grey: '#ece6da',
        blue: '#15c1be',
        yellow: '#f79e55',
        orange: '#e25e32',
        green: '#047125',
      },
    },
  },
  plugins: [],
}
