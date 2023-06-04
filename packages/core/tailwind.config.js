const { typographyPlugin } = require('./src/config/plugin');
const { tailwindTheme } = require('./src/config/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: tailwindTheme,
  plugins: [typographyPlugin],
  // corePlugins: {
  //   backgroundOpacity: false,
  // },
};
