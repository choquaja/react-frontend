import styled, { css } from 'styled-components';
import { themeBreakpoint } from '../../services/theme';

const ResponsiveContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  ${props => !props.fluid && css`
    @media (min-width: ${themeBreakpoint('md')}) {
      width: 750px;
    }
    @media (min-width: ${themeBreakpoint('lg')}) {
      width: 970px;
    }
    @media (min-width: ${themeBreakpoint('xl')}) {
      width: 1170px;
    }
  `}
`;

export default ResponsiveContainer;
