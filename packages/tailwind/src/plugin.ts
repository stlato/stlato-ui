import { theme } from "stlato-ui-theme";
import plugin from "tailwindcss/plugin";

const sans = [
  Object.values(theme.typography.fontFamily.sans),
  "san-serif",
].join(",");
const mono = Object.values(theme.typography.fontFamily.mono).join(",");
const serif = [Object.values(theme.typography.fontFamily.serif), "serif"].join(
  ","
);

export const typographyPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".typography-h1": {
      fontFamily: sans,
      ...theme.typography.h1,
    },
    ".typography-h2": {
      fontFamily: sans,
      ...theme.typography.h2,
    },
    ".typography-h3": {
      fontFamily: sans,
      ...theme.typography.h3,
    },
    ".typography-h4": {
      fontFamily: sans,
      ...theme.typography.h4,
    },
    ".typography-h5": {
      fontFamily: sans,
      ...theme.typography.h5,
    },
    ".typography-h6": {
      fontFamily: sans,
      ...theme.typography.h6,
    },
    ".typography-subtitle1": {
      fontFamily: sans,
      ...theme.typography.subtitle1,
    },
    ".typography-subtitle2": {
      fontFamily: sans,
      ...theme.typography.subtitle2,
    },
    ".typography-body1": {
      fontFamily: sans,
      ...theme.typography.body1,
    },
    ".typography-body2": {
      fontFamily: sans,
      ...theme.typography.body2,
    },
    ".typography-button": {
      fontFamily: mono,
      ...theme.typography.button,
    },
    ".typography-caption": {
      fontFamily: serif,
      ...theme.typography.button,
    },
    ".typography-overline": {
      fontFamily: mono,
      ...theme.typography.overline,
    },
  });
});
