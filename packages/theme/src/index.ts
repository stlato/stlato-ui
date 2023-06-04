import { deepMerge } from "./deepMerge";
import token from "./tokens.json";

export const theme = token;

export const createTheme = (customTheme?: typeof theme): typeof theme => {
  return deepMerge<typeof theme>(theme, customTheme);
};
