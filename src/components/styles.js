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
  }
};

// Adapted from Ramda's path.js implemenation
// https://github.com/ramda/ramda/blob/master/src/path.js
export const getThemePart = (...paths) => props => {
  const fullPath = ['theme', ...paths];
  var val = props;
  var idx = 0;
  while (idx < fullPath.length) {
    if (val == null) {
      return;
    }
    val = val[fullPath[idx]];
    idx += 1;
  }
  return val;
};

export const getThemeDefaultColumns = getThemePart('columns', 'number')

export const getThemeBreakpoints = getThemePart('breakpoints');
export const getThemeBreakpoint = bp => getThemePart('breakpoints', bp);

export const getThemeColors = getThemePart('colors');
export const getThemeColor = color => getThemePart('colors', color);

export const getThemeFonts = getThemePart('fonts')
export const getThemeFont = type => getThemePart('fonts', type)
