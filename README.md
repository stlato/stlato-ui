# Stlato UI

<div align="center">

![logo](https://github.com/stlato/stlato-ui/blob/main/apps/docs/src/stories/assets/logo.png?raw=true)

Stlato UI - Design System, finally for everyone.

</div>

## Overview

Stlato UI is a simple Design System tool kit.<br/>
Fork it, customize it, and create your own.<br/>
Everything you need to implement design system in your project is here.

## Features

- **Monorepo:** The entire code can be grasped at a glance.
- **Customization:** Stlato UI makes it easy to implement your own custom design system.
- **Accessibility:** High accessibility support for all components.
- **Theming:** Sharable theme variables are provided.
- **TypeScript:** Type safety to improve developer productivity and code quality.

Stlato UI powered by:

- Turbopack
- Radix UI
- TailwindCSS
- Tailwind Variants
- Style Directory
- Nextra
- Storybook

## Getting Started

### Fork(recommended)

1. Fork this repository
2. Customize UI
3. Use it

#### How to use your own component library?

Your project's package.json should be looked like this:

```bash
"dependencies": {
  "your-customized-component-library": "git+https://<github_token>:x-oauth-basic@github.com/<user>/<your-foked-repo>.git"
}
```

Then, Use it!

```jsx
import { Button } from "your-customized-component-library";

const YourApp = () => {
  return <Button>Hi There !</Button>;
};
```

### Install(not recommended)

Stlato UI is also available as a package.<br/>
However, it is not recommended to use it as a package because the customization is limited.

```bash
npm i stlato-ui
```

#### Configure Tailwind

You should add `stlato-ui` to apply the classes from the interactive elements in the tailwind.config.js file:

```js
const { typographyPlugin, tailwindTheme } = require("stlato-ui-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/stlato-ui/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: tailwindTheme,
  plugins: [typographyPlugin],
};
```

## How To Develop

1. Fork or clone this Repository.
2. Run `pnpm i` in your terminal.
3. Run `pnpm dev`
4. Turbo Repo Automatically run every repositories that need to develop.
5. Write your code🎉

| application | local                 |
| ----------- | --------------------- |
| docs        | http://localhost:6006 |
| website     | http://localhost:4000 |
