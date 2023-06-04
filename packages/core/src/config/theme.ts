import { theme } from 'stlato-ui-theme';
import type { OptionalConfig } from 'tailwindcss/types/config';

type Str = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type Num = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const convertToNumRecord = (colorSchema: Record<Str, string>): Record<Num, string> => {
  const keys = Object.keys(colorSchema) as Str[];
  const converted = keys.reduce((prev, current) => {
    const key = parseInt(current, 10);

    return { ...prev, [key]: colorSchema[current] };
  }, {});

  return converted as Record<Num, string>;
};

const colors = {
  text: {
    primary: theme.color.text.primary,
    secondary: theme.color.text.secondary,
    disabled: theme.color.text.disabled,
  },
  divider: theme.color.divider,
  background: {
    default: theme.color.background.default,
    paper: theme.color.background.paper,
  },
  action: {
    active: theme.color.action.active,
    hover: theme.color.action.hover,
    activeHover: theme.color.action.activeHover,
    hoverOpacity: theme.color.action.hoverOpacity,
    selected: theme.color.action.selected,
    selectedOpacity: theme.color.action.selectedOpacity,
    disabled: theme.color.action.disabled,
    disabledBackground: theme.color.action.disabledBackground,
    disabledOpacity: theme.color.action.disabledOpacity,
    focus: theme.color.action.focus,
    focusOpacity: theme.color.action.focusOpacity,
    activatedOpacity: theme.color.action.activatedOpacity,
  },
  common: {
    black: theme.color.common.black,
    white: theme.color.common.white,
  },
  primary: {
    DEFAULT: theme.color.primary.main,
    contraText: theme.color.primary.contrastText,
  },
  secondary: {
    DEFAULT: theme.color.secondary.main,
    contraText: theme.color.secondary.contrastText,
  },
  success: {
    DEFAULT: theme.color.success.main,
    contrastText: theme.color.success.contrastText,
  },
  error: {
    DEFAULT: theme.color.error.main,
    contrastText: theme.color.error.contrastText,
  },
};

export const tailwindTheme: OptionalConfig['theme'] = {
  screens: {
    screen1: theme.breakpoint.xs,
    screen2: theme.breakpoint.sm,
    screen3: theme.breakpoint.md,
    screen4: theme.breakpoint.lg,
    screen5: theme.breakpoint.xl,
  },
  extend: {
    colors: {
      primary: convertToNumRecord(theme.color.violet),
      secondary: convertToNumRecord(theme.color.submarine),
      violet: convertToNumRecord(theme.color.violet),
      submarine: convertToNumRecord(theme.color.submarine),
    },
    borderRadius: {
      DEFAULT: theme.radius,
    },
    transitionDuration: {
      DEFAULT: theme.transition.duration.standard,
    },
  },
};
