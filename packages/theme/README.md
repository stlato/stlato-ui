# stlato-ui-theme

[![npm version](https://badge.fury.io/js/stlato-ui-theme.svg)](https://badge.fury.io/js/stlato-ui-theme)

Theme generator powered by Style Dictionary

## Install

```bash
yarn add stlato-ui-theme
```

## How to use

### Example: Emotion

```js
import { css } from "emotion";
import { theme } from "stlato-ui-theme";

const root = css`
  color: ${theme.color.text.primary.value};
`;
```

### Customization

```js
import { createTheme } from "stlato-ui-theme";

const yourOwnTheme = createTheme({ ...yourOwnConfig });
```
