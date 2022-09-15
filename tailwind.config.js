/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      accent: "#F47518",
      white: "#ffffff",
      black: "#000000",
      gray: "#C4C4C4",
      temp: "#71F1B3",
      temp2: "#EDF3F6",
      bg1: "#ffffff",
      focus_color_1: "#FFEEE1",
      close: "#ff605c",
      green:"#3E9B58"
    },
    extend: {
      animation:{
        'bounce-short': 'bounce 1s ease-in-out 5'
      },
      fontFamily: {
        'montserrat-semibold': ['Montserrat-Semibold'],
        'montserrat-regular': ['Montserrat-Regular'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    }
    },
  },
  plugins: [],
}
