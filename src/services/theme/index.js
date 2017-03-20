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
    primary: '#58b208',
    primaryLight: '#e8fdd5',
    cloudGray: '#ecf0f1',
    silverGray: '#bdc3c7',
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Roboto', sans-serif",
  },
};

// Adapted from Ramda's path.js implemenation
// https://github.com/ramda/ramda/blob/master/src/path.js
/**
 * Gets value from theme object by path
 * @param  {String[]} paths - path to desired value as multiple arguments
 * @param  {Object} props - object with theme as a property
 * @return {*|undefined} - value at path
 */
export const themePart = (...paths) => (props) => {
  const fullPath = ['theme', ...paths];
  let val = props;
  let idx = 0;
  while (idx < fullPath.length) {
    if (val == null) {
      return null;
    }
    val = val[fullPath[idx]];
    idx += 1;
  }
  return val;
};

export const themeDefaultColumns = themePart('columns', 'number');

export const themeBreakpoints = themePart('breakpoints');
export const themeBreakpoint = bp => themePart('breakpoints', bp);

export const themeColors = themePart('colors');
export const themeColor = color => themePart('colors', color);

export const themeFonts = themePart('fonts');
export const themeFont = type => themePart('fonts', type);
