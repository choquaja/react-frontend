import styled from 'styled-components';
import logo from './images/logo.svg';

const Logo = styled.img.attrs({
  src: logo,
  alt: '3Blades',
})`
  display: block;
  width: 100%;
  height: auto;
`;

export default Logo;
