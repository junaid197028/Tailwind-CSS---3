/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    maxWidth: {
      '1342': '1367px',
    },
    extend: {
     
      fontFamily: {
        'own':'Mulish',
      },
    },
  },
  plugins: [],
}
