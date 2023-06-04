const { typographyPlugin } = require("./src/config/plugin");
const { tailwindTheme } = require("./src/config/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/stlato-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: tailwindTheme,
  plugins: [typographyPlugin],
  // corePlugins: {
  //   backgroundOpacity: false,
  // },
};
