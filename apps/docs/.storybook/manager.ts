import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";
import { theme } from "stlato-ui-theme";
import "../src/index.css";
import "tailwindcss/tailwind.css";

export const storybookTheme = create({
  base: "light",

  colorPrimary: theme.colors.primary.main,
  colorSecondary: theme.colors.primary.main,

  appBg: theme.colors.background.default,
  appBorderRadius: 4,
  barBg: theme.colors.background.default,

  inputBorder: "rgba(0, 0, 0, 0.18)",
  inputBorderRadius: 4,

  brandTitle: "Stlato UI",
  brandImage: "/logo.svg",
});

addons.setConfig({
  theme: storybookTheme,
});
