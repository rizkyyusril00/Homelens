/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fade : 'fade 2s ease-in-out forwards',
        fade2 :'fade2 2s ease-in-out forwards',
        fade3 :'fade3 2s ease-in-out forwards',
        dropdownin:'dropdownin 0.2s ease-in-out forwards',
        dropdownout:'dropdownout 0.2s ease-in-out forwards'
      },
      keyframes:{
        fade:{
          from:{
            opacity:0,
            transform:'translateY(100%)'
          },
          to:{
            opacity:1,
            transform:'translateY(0)'
          },
          
        },
        fade2:{
          from:{
            opacity:0,
            transform:'translateX(-100%)'
          },
          to:{
            opacity:1,
            transform:'translateX(0)'
          },
          
        },
        fade3:{
          from:{
            opacity:0,
            transform:'translateX(100%)'
          },
          to:{
            opacity:1,
            transform:'translateX(0)'
          },
          
        },
        dropdownin:{
          from: {
            opacity:0,
            transform:'translateY(-10%)'
          },
          to:{
            opacity:1,
            transform:'translateY(0)'
          }
        },
        dropdownout:{
          from:{
            opacity:1,
            transform:'translateY(0)'
          },
          to:{
            opacity:0,
            transform:'translateY(-10%)'
          }
        }
      },
      colors: {
        primary: '#0D0F11',
        secondary: '#141F24',
        tertiary: '#233942',
      },
      screens: {
        'xs': '400px',
        'md': '768px',
        'lg': '1024px',
        '2lg': '1260px',
        '3lg': '1366px',
        'xl': '1440px',
        '2xl': '1960px',
        '4k': '2560px',
      },
    },
  },
  plugins: [],
}