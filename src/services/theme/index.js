import getOr from 'lodash/fp/getOr';

export const theme = {
  columns: {
    number: 12,
  },
  breakpoints: {
    sm: '40rem',
    md: '70rem',
    lg: '100rem',
    xl: '130rem',
  },
  colors: {
    primary: '#f47920',
    primaryVariant1: '#f7901d',
    primaryVariant2: '#fcb361',
    secondary: '#20c5f4',
    secondaryVariant1: '#83e9ff',
    secondaryVariant2: '#c6f0ff',
    tertiary: '#182752',
    tertiaryVariant1: '#485372',
    tertiaryVariant2: '#8a90a3',
    success: '#4caf50',
    info: '#2196f3',
    warning: '#9c27b0',
    error: '#e51c23',
    white: '#fff',
    gray1: '#f4f4f4',
    gray2: '#dfdfdf',
    gray3: '#bdbdbd',
    gray4: '#8c8c8c',
    gray5: '#5e5e5e',
    gray6: '#3b3b3b',
    black: '#111',
    backdrop: '#f2f7fa',
  },
  fonts: {
    body: "'Nunito Sans', sans-serif",
    heading: "'Roboto', sans-serif",
  },
};

/**
 * Gets value from theme object by path
 * @param  {String[]} paths - path to desired value as multiple arguments
 * @param  {Object} props - object with theme as a property
 * @return {*|undefined} - value at path
 */
export const themePart = (...paths) => getOr('')(['theme', ...paths]);

export const themeDefaultColumns = themePart('columns', 'number');

export const themeBreakpoints = themePart('breakpoints');
export const themeBreakpoint = bp => themePart('breakpoints', bp);

export const themeColors = themePart('colors');
export const themeColor = color => themePart('colors', color);

export const themeFonts = themePart('fonts');
export const themeFont = type => themePart('fonts', type);
