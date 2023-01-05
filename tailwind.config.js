/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url('../public/blob_feature.svg')",
      'rings': "url('../public/rings.svg')"
    },
    extend: {
      colors:{
        black_btn: {
          100:"#000000",
        }
      }
    },
  },
  plugins: [],
});