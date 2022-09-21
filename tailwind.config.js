module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'signika-negative': ['Signika Negative', 'Sans-serif'],
        'open-sans': ['Open Sans', 'Sans-serif']
      },
      colors: {
        light: '#F4F4F4',
        dark: '#333333',
        highlight: '#8E2A29'
      },
      fontSize: {
        xxs: '10px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
