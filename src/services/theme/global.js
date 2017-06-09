import { injectGlobal } from 'styled-components';
import normalize from 'polished/lib/mixins/normalize';
import { theme, themeFont, themeColor } from '.';

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  main {
    height: 100%;
  }
  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${themeFont('body')({ theme })};
    font-size: 1.4rem;
    background-color: ${themeColor('backdrop')({ theme })};
    color: ${themeColor('tertiary')({ theme })};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${themeFont('heading')({ theme })};
  }
`;
/* eslint-enable */
