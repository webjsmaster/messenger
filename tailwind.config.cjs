/** @type {import('tailwindcss').Config} */
const constants = {
  myBlue: '#6366f1',
};
module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        ...constants,
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        card: '-5px 5px 10px 5px rgba(0, 0, 0, 0.3)',
      },
    },
    screens: {
      lg: '1280px',
      md: '768px',
      tablet: '640px',
      sm: '440px',
      min: '120px',
    },
  },
  plugins: [],
  darkMode: 'class',
};
