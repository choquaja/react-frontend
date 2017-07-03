import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { themeColor } from '../../../../../../services/theme';

const PasswordResetLink = styled(Link).attrs({
  to: '/auth/reset-password',
  children: 'Forgot password?',
})`
  display: block;
  text-decoration: none;
  font-size: 1.1em;
  color: ${themeColor('secondary')};
  text-align: center;
  font-weight: 600;
`;

export default PasswordResetLink;
