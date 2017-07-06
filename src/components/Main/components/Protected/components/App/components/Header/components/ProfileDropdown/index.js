import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import timingFunctions from 'polished/lib/mixins/timingFunctions';
import profileImg from './images/profile.png';
import { themeColor } from '../../../../../../../../../../services/theme';
import Button from '../../../../../../../../../Button';
import Dropdown from '../../../../../../../../../Dropdown';
import connector from './connector';

const ProfileImgButton = styled(Button)`
  outline: 0;
  border: none;
  padding: 0;
`;

const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 4px;
`;

const DropdownStaticText = styled.li`
  display: block;
  padding: 1.2rem 2rem;
  color: ${themeColor('gray4')};
  font-weight: 700;
`;

const DropdownSeparator = styled.li.attrs({
  role: 'separator',
})`
  border-bottom: 1px solid ${themeColor('gray2')};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 1.2rem 2rem;
  text-decoration: none;
  color: ${themeColor('tertiary')};
  font-weight: 500;
  transition: all .15s ${timingFunctions('easeIn')};
  &:hover {
    background-color: ${themeColor('primary')};
    color: ${themeColor('white')};
  }
`;

function ProfileDropdown({ avatar, username }) {
  return (
    <Dropdown
      textAlign="left"
      animAlign="right"
      menuAlign="right"
      toggle={({ handleClick }) => (
        <ProfileImgButton onClick={handleClick} flat>
          <ProfileImg src={avatar || profileImg} />
        </ProfileImgButton>
      )}
    >
      <li><DropdownStaticText>{username}</DropdownStaticText></li>
      <DropdownSeparator />
      <li><DropdownLink to="/settings/profile">Settings</DropdownLink></li>
      <li><DropdownLink to="#">Invite a Friend</DropdownLink></li>
      <DropdownSeparator />
      <li><DropdownLink to="/auth/logout">Sign Out</DropdownLink></li>
    </Dropdown>
  );
}

ProfileDropdown.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
};

ProfileDropdown.defaultProps = {
  avatar: '',
};

export default connector(ProfileDropdown);
