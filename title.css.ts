import { createTheme, style } from '@vanilla-extract/css';
export const [themeClass, vars] = createTheme({
  filters: {
      invert: "100%",
  }
});

export const hero = style({
  filter: vars.filters.invert
});