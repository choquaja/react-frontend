import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../../../services/theme';
import logo from './images/logo.svg';
import Row from '../../../shared/row';
import Column from '../../../shared/column';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${themeColor('cloudGray')};
  padding: 10px 10px 20px 10px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
`;

const HeaderLogo = styled.img`
  vertical-align: middle;
  display: block;
  max-width: 100%;
  height: auto;
`;

const HeaderSearchInput = styled.input`
  float: left;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
`;

const HeaderSearchButton = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  border: none;
  background-color: ${themeColor('primary')};
  color: white;
  height: 40px;
  font-size: 12px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Row>
        <Column size={3}>
          <HeaderLogo src={logo} alt="3blades" />
        </Column>
        <Column size={3}>
          <HeaderSearchInput type="text" />
          <HeaderSearchButton>
            Search
          </HeaderSearchButton>
        </Column>
      </Row>
    </HeaderWrapper>
  );
}

export default Header;
