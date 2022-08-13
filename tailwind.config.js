/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      accent: "#6597E2",
      white: "#ffffff",
      black: "#000000",
      gray: "#C4C4C4",
      temp: "#71F1B3",
      temp2: "#EDF3F6",
      bg1: "#EDF3F6",
      focus_color_1: "#FFEEE1",
      close: "#ff605c"
    },
    extend: {
      animation:{
        'bounce-short': 'bounce 1s ease-in-out 5'
      }
    },
  },
  plugins: [],
}
