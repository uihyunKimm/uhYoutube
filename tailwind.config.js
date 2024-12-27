/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      content :{
        empty:"''",
      },
      backgroundImage: {
        'search-icon': "url('https://webs-youtube.netlify.app/static/media/search.7a791d77d93a3a089a1d.svg')",
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
        },
        ani : {
          '0%': {
              transform: 'rotate(0) scale(1)',
              borderRadius: '0'
          },
          '50%': {
              transform: 'rotate(720deg) scale(0.5)',
              borderRadius: '20px'
          },
         '100%': {
              transform: 'rotate(0) scale(1)',
              borderRadius: '0'
          }
        },
        bounceDots: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'spin-logo':'logoswing 16s 0.1s ease-in-out infinite',
        'spin-logo2':'logoswing 16s 0.3s ease-in-out infinite',
        'spin-logo3':'logoswing 16s 0.5s ease-in-out infinite',
        'spin-logo4':'logoswing 16s 0.7s ease-in-out infinite',
        'spin-logo5':'logoswing 16s 0.9s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'flowtext': 'flowtext 12s linear infinite',
        'fadein': 'fadein 2.5s ease-in',
        'fadein': 'fadein 2.5s ease-in',
        'bounceDots': 'bounceDots 0.6s infinite',
      },
      colors: {
        mainback: {DEFAULT: '#1E1E1E'},
        IDSprimary: {
          100: '#F8F8FB',
          200: '#F1F7FF',
          300: '#BEDAFF',
          400: '#6273DE',
          500: '#2B398F',
          600: '#1a2677',
          bg: '#ECF4FF',
          font: '#7C7C7C',
        },
        primary: {
          DEFAULT: '#006FFF',
          0: '#F3FBFF',
          100: '#E6F7FF',
          200: '#BAE7FF',
          300: '#91D5FF',
          400: '#69C0FF',
          500: '#40A9FF',
          600: '#2C87FF',
          650: 'rgb(0 101 233 / 0.7)',
          700: '#0065E9',
          800: '#002766',
          900: '#002766',
          overlay: '#0065E910',
        },
        gray : {
          100: '#F8F8F8',
          200: '#F6F6F6',
          300: '#EDEDED',
          400: '#DDDDDD',
          500: '#999999',
          600: '#777777',
          700: '#555555',
          800: '#333333',
          900: '#111111',
          overlay: 'rgb(0 0 0 / 0.8)',
        },
        border:{
          borderbottom:"1px solid gray-900"
        },
        secondary:{DEFAULT: '#31708F'},
        alert:{100: '#FF555530',200: '#FF5555',overlay: '#FF555540'},
        error:{100: '#EC383860',200: '#EC3838',300: '#FF2E2E'},
        navback: {
          DEFAULT: '#0f172A',
          500: '#182032',
          400: '#2C3344',
          300: '#363C4C',
          200: '#3F4555',
          100: '#484E5D',
          'font': '#9CA5BF',
          'darkfont': '#4C5877',
          900: '#060E21'
        },
        black: {DEFAULT: "#000",500: "#1D2235"},
        blue: { 300: '#AED2FF',500: "#2b77e7"},
        'main' : '#007bff',
        "sub" : '#82a5ff',
        "point": '#ff9ff3',
        "success": '#0C9000',
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
      font: {
        "title-1":'normal 600 30px/1.4',
        "title-2":'normal 600 24px/1.4',
        "title-3":'normal 500 20px/1.4',
        "body-1":'normal 600 18px/1.4',
        "body-2":'normal 500 16px/1.4',
        "body-3":'normal 500 14px/1.4',
        "body-4":'normal 500 12px/1.4',
        "body-5":'normal 400 12px/1.4',
        "button-0":'normal 500 20px/1.4',
        "button-1":'normal 500 18px/1.4',
        "button-2":'normal 600 16px/1.4',
        "button-3":'normal 500 15px/1.4',
        "label":'normal 400 10px/1.4',
      },
      spacing: {
        DEFAULT: '-0.1px',
        spacing1: '-1px',
        spacing2: '-2px',
      },
      boxShadow: {
        DEFAULT: "0px 4px 25px 0px rgb(0 0 0 /0.1)",
        card: "0px 1px 2px 0px rgb(0 0 0/ 0.05)"
      },
      transitionProperty : {
        position: 'position, left, right'
      },
      backgroundImage: {
        /* 'search-icon': "url('../../img/icon/search.svg')", */
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #0048ff 35.75978322072072%, rgba(171, 171, 171, 0) 100%)',
        'custom-radial-2': "radial-gradient(50% 50% at 50% 50%, #0099ff 0%, rgba(171, 171, 171, 0) 100%)",
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.framer-will-change': {
          '--framer-will-change-override': 'none',
          'will-change': 'var(--framer-will-change-override, transform)',
        },
      });
    },
  ],
}

