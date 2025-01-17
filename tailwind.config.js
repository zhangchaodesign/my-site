module.exports = {
  content: ["./src/**/*.vue"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        "signika-negative": ["Signika Negative", "Sans-serif"],
        "open-sans": ["Open Sans", "Sans-serif"],
      },
      colors: {
        dark: "#333333",
        highlight: "#8E2A29",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
