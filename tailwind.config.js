/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-logo':'logoswing 16s 0.1s ease-in-out infinite',
        'spin-logo2':'logoswing 16s 0.3s ease-in-out infinite',
        'spin-logo3':'logoswing 16s 0.5s ease-in-out infinite',
        'spin-logo4':'logoswing 16s 0.7s ease-in-out infinite',
        'spin-logo5':'logoswing 16s 0.9s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'flowtext': 'flowtext 12s linear infinite',
        'fadein': 'fadein 2.5s ease-in',
      },
      keyframes: {
        logoswing : {
            '0%, 100%': {
              transform: 'rotate(0) scale(0.9)',
              borderRadius: '8px'
            },
            '50%': {
                transform: 'rotate(720deg) scale(0.7)',
                borderRadius: '20px'
            }
        }
      },
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

