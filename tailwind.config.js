/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        fadedPurple: '#674DAA',
        lightPurple: '#5D42A6',
        mediumPurple: '#493382',
        darkPurple: '#312450',
        lightblue: '#4F52B5',
        mediumBlue: '#4B4FAC',
        darkBlue: '#474AA5',
        darkPink: '#B74E91',
        lightPink: '#BC5896',
        darkGrey: '#766D88',
        lightGrey: '#AFA2D2',
        linkBorder: '#3C2C62',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'header-bg': "url('/images/header-bg.jpg')",
      },
    },
  },
  plugins: [],
};
