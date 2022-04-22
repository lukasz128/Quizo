const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.tsx', './App.tsx'],
  theme: {
    extend: {
      fontFamily: {sans: ['Roboto', ...defaultTheme.fontFamily.sans]},
      colors: {
        primary: {
          DEFAULT: '#388DF9',
          50: '#9CC6FC',
          100: '#88BAFB',
          200: '#74AFFB',
          300: '#61A3FA',
          400: '#4D98F9',
          600: '#2581F8',
          700: '#1275F8',
          800: '#076BED',
          900: '#0650B2',
        },
        fb: {DEFAULT: '#4267B2'},
        google: {DEFAULT: '#F4B400'},
        success: {DEFAULT: '#54FF04'},
        error: {DEFAULT: '#FF0404'},
        disabled: {DEFAULT: '#e0e0e0'},
      },
    },
  },
  plugins: [],
};
