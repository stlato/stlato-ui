import { theme } from "stlato-ui-theme";
import type { OptionalConfig } from "tailwindcss/types/config";

export const tailwindTheme: OptionalConfig["theme"] = {
  screens: {
    screen1: theme.breakpoint.xs,
    screen2: theme.breakpoint.sm,
    screen3: theme.breakpoint.md,
    screen4: theme.breakpoint.lg,
    screen5: theme.breakpoint.xl,
  },
  extend: {
    colors: {
      ...theme.color,
      primary: {
        ...theme.colors.violet,
        DEFAULT: theme.color.primary.main,
        contraText: theme.color.primary.contrastText,
      },
      secondary: {
        ...theme.color.submarine,
        DEFAULT: theme.color.secondary.main,
        contraText: theme.color.secondary.contrastText,
      },
    },
    borderRadius: {
      DEFAULT: theme.radius,
    },
    transitionDuration: {
      DEFAULT: theme.transition.duration.standard,
    },
  },
};
