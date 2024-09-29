/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          300: '#AED2FF',
          500: "#2b77e7"
        },
        'main' : '#007bff',
        "sub" : '#82a5ff',
        "point": '#ff9ff3'
      },
      fontFamily: {
        nanumlight: ["NanumSquareNeoLight", "sans-serif"],
        nanumneo: ["NanumSquareNeo", "sans-serif"],
        nanumbold: ["NanumSquareNeoBold", "sans-serif"],
        nanumEbold: ["NanumSquareNeoExtraBold", "sans-serif"],
        nanumH: ["NanumSquareNeoHeavy", "sans-serif"],
        spoqasans: ['Spoqa Han Sans Neo', 'sans-serif'],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      transitionProperty : {
        position: 'position, left, right'
      }
    },
  },
  plugins: [],
}

