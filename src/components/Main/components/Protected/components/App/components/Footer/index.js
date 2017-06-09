import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../../../../../../../services/theme';
import PageWidth from '../../../../../../../PageWidth';
import Status from './components/Status';

const FooterWrapper = styled.footer`
  text-align: center;
  border-top: 1px solid ${themeColor('gray2')};
  font-size: 1.2rem;
  background-color: ${themeColor('white')};
  padding: 1rem 0;
`;

const FooterSeparator = styled.span`
  margin: 0 1rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <PageWidth>
        &copy; 2017 3Blades. LLC
        <FooterSeparator>|</FooterSeparator>
        <FooterLink href="https://www.3blades.io/legal/terms-and-conditions/" target="_blank">Terms of Use</FooterLink>
        <FooterSeparator>|</FooterSeparator>
        <FooterLink href="https://www.3blades.io/legal/privacy-policy/" target="_blank">Privacy Policy</FooterLink>
        <FooterSeparator>|</FooterSeparator>
        <FooterLink href="http://status.3blades.io"><Status /></FooterLink>
      </PageWidth>
    </FooterWrapper>
  );
}

export default Footer;
