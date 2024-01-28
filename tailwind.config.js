/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html'],
  theme: {
    extend: {
      colors : {
        primary : 'hsl(75, 94%, 57%)',
        neutral_1 : 'hsl(0, 0%, 100%)',
        neutral_2 : 'hsl(0, 0%, 20%)',
        neutral_3 : 'hsl(0, 0%, 12%)',
        neutral_4 : 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'inter': ['Inter','sans-serif'],
      }
    },
  },
  plugins: [],
}