import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../../../services/theme';
import ResponsiveContainer from '../../../shared/responsive-container';

const FooterWrapper = styled.footer`
  margin-top: 30px;
  height: 50px;
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid ${themeColor('cloudGray')};
`;

const FooterSeparator = styled.span`
  margin: 0 10px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <ResponsiveContainer>
        &copy; 2017 3Blades. LLC
        <FooterSeparator> |</FooterSeparator>
        <a href="/terms-of-use/">Terms of Use</a>
        <FooterSeparator>|</FooterSeparator>
        <a href="/privacy-policy/">Privacy Policy</a>
        <FooterSeparator>|</FooterSeparator>
        <a href="http://status.3blades.io">Status</a>
        <FooterSeparator>|</FooterSeparator>
        <a href="https://support.3blades.io/hc/en-us">Help</a>
      </ResponsiveContainer>
    </FooterWrapper>
  );
}

export default Footer;
