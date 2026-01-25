/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "techCareer-green": "#00C26D",
      },
      fontFamily: {
        robatoFont: ["Roboto", "sans-serif"],
        ewertFont: ["Ewert", "serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
