const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
   
    extend: {
      fontFamily:{
         'gothic':'Didact Gothic'
      },
      colors:{
          'lolo':'#250D53',
          'pink01':'#FF5D8F',
          'blue01':'#2D155A'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
