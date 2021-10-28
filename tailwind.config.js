const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        blue: "#011028",
        ligth: "#273447"
      },
      green: {
        DEFAULT: "#0A9C76",
        100: "#D4F4E9",
        200: "#9CF7BC",
        300: "#68E9A1",
        400: "#41D390",
        500: "#0FB67A",
        600: "#0A9C76",
        700: "#07836F",
        800: "#046963",
        900: "#025457"
      },
      white: {
        DEFAULT: "#FFFFFF",
        100: "#F5F6F9",
        200: "#CCCFD4",
        300: "#B3B8BF",
        400: "#999FA9",
        500: "#818894",
        600: "#67707E",
        700: "#4E5869",
        800: "#344053",
        900: "#1A273D"
      },
      gray: {
        100: "#F5F6F9",
        200: "#CCCFD4",
        300: "#B3B8BF",
        400: "#999FA9",
        500: "#818894",
        600: "#67707E",
        700: "#4E5869",
        800: "#344053",
        900: "#1A273D"
      },
      orange: {
        DEFAULT: "#FF8B49",
        ligth: "#FFF0EC"
      },
      purple: {
        100: "#ECE0FF",
        200: "#9C5DFD",
        300: "#884DA8",
        400: "#40095A",
        500: "#2D0042"
      },
      blue: {
        deep: "#0A3A65"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}