import type { Preview } from "@storybook/react";
import "../src/index.css";
import "tailwindcss/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    options: {
      storySort: {
        order: ["Introduction", "Components"],
        includeName: true,
      },
    },
  },
};

export default preview;
