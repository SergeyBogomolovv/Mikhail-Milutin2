/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '460px'
      },
      fontFamily: {
        monsterrat: ['Montserrat'],
        charm: ['Charm-Bold'],
      },
      gridTemplateColumns: {
        'twotoone': '2fr 1fr',
      },
    },
  },
  plugins: [],
}
