import { convertToNumRecord } from "./convertToNumRecord";
import { deepMerge } from "./deepMerge";
import token from "./tokens.json";

export const theme = {
  ...token,
  colors: {
    ...token.color,
    violet: convertToNumRecord(token.color.violet),
    navy: convertToNumRecord(token.color.navy),
    blue: convertToNumRecord(token.color.blue),
    indigo: convertToNumRecord(token.color.indigo),
    cerise: convertToNumRecord(token.color.cerise),
    cocoa: convertToNumRecord(token.color.cocoa),
    gold: convertToNumRecord(token.color.gold),
    lemon: convertToNumRecord(token.color.lemon),
    green: convertToNumRecord(token.color.green),
    submarine: convertToNumRecord(token.color.submarine),
  },
} as const;

export const createTheme = (customTheme?: typeof theme): typeof theme => {
  return deepMerge<typeof theme>(theme, customTheme);
};
