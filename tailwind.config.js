/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#666CA3',
      naval: '#13183F',
      silver: '#83869A',
      hotPink: '#F74780',
      pink: '#FFA7C3',
      orangeGradientOne: '#F02AA6',
      orangeGradientTwo: '#FF6F48',
      blueGradientOne: '#4851FF',
      blueGradientTwo: '#F02AA6',
      offWhite: '#F0F1FF'
    },
  },
  plugins: [],
}