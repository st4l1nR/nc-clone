/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins'],
      roboto: 'Roboto',
      colors: {
        primary: {
          50: '#ffb69b',
          100: '#ffac91',
          200: '#ffa287',
          300: '#ff987d',
          400: '#ff8e73',
          500: '#fc8469',
          600: '#f27a5f',
          700: '#e87055',
          800: '#de664b',
          900: '#d45c41',
        },
        secondary: {
          50: '#60697a',
          100: '#565f70',
          200: '#4c5566',
          300: '#424b5c',
          400: '#384152',
          500: '#2e3748',
          600: '#242d3e',
          700: '#1a2334',
          800: '#10192a',
          900: '#060f20',
        },
        ...colors,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
