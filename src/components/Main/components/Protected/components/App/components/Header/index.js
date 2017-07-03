import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themeColor } from '../../../../../../../../services/theme';
import Row from '../../../../../../../shared/row';
import Column from '../../../../../../../shared/column';
import Button from '../../../../../../../Button';
import FormInput from '../../../../../../../FormInput';
import Logo from '../../../../../../../Logo';
import PageWidth from '../../../../../../../PageWidth';
import ProfileDropdown from './components/ProfileDropdown';

const HeaderWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  position: relative;
  background-color: ${themeColor('white')};
`;

const HeaderPageWidth = styled(PageWidth)`
  padding: 1rem 0;
`;

const HeaderLogo = Logo.extend`
  vertical-align: middle;
  max-width: 150px;
`;

const SearchColumn = styled(Column)`
  display: flex;
  align-items: center;
`;

const SearchInput = styled(FormInput)`
  width: 30rem;
  margin-right: 1rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderPageWidth>
        <Row align="center">
          <Column flex="0 1 auto">
            <Link to="/">
              <HeaderLogo />
            </Link>
          </Column>
          <SearchColumn flex="1 0 auto">
            <SearchInput type="text" placeholder="Search Anything" />
            <Button primary flat>Search</Button>
          </SearchColumn>
          <Column flex="0 1 auto">
            <ProfileDropdown />
          </Column>
        </Row>
      </HeaderPageWidth>
    </HeaderWrapper>
  );
}

export default Header;
