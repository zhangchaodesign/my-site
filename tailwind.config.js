module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'signika-negative': ['Signika Negative', 'Sans-serif'],
        'open-sans': ['Open Sans', 'Sans-serif']
      },
      colors: {
        dark: '#333333',
        highlight: '#8E2A29'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
