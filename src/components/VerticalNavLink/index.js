import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themeColor } from '../../services/theme';

const VerticalNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  display: block;
  padding: 1.2rem .8rem;
  font-size: 1.1em;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: ${themeColor('gray2')};
  }
  &[class~="active"] {
    background-color: ${themeColor('primary')};
    color: ${themeColor('white')};
  }
`;

export default VerticalNavLink;
