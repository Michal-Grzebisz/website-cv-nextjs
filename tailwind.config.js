// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],

  // or 'media' or 'class'
  theme: {
    colors: {
      cvDark: '#111111',
      cvSalmon: '#ed6c64',
      cvGray: '#3e475d',
      ...colors,
    },
    fontFamily: {
      'lora': [ 'Lora' ],
      'roboto': [ 'roboto' ],
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        'responsive',
        'hover',
        'focus',
        'odd',
        'even',
      ],
    },
  },
};
