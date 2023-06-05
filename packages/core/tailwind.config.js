const { typographyPlugin, tailwindTheme } = require('stlato-ui-tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: tailwindTheme,
  plugins: [typographyPlugin],
};
