const { typographyPlugin, tailwindTheme } = require("stlato-ui-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/stlato-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: tailwindTheme,
  plugins: [typographyPlugin],
};
