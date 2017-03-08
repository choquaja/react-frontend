import styled, { css } from 'styled-components';
import { getThemeBreakpoint } from '../styles'

const ResponsiveContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  ${props => !props.fluid && css`
    @media (min-width: ${getThemeBreakpoint('md')}) {
      width: 750px;
    }
    @media (min-width: ${getThemeBreakpoint('lg')}) {
      width: 970px;
    }
    @media (min-width: ${getThemeBreakpoint('xl')}) {
      width: 1170px;
    }
  `}
`;

export default ResponsiveContainer;
