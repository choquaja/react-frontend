import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import timingFunctions from 'polished/lib/mixins/timingFunctions';
import profileImg from './images/profile.png';
import { themeColor } from '../../../../../../../../../../services/theme';
import Button from '../../../../../../../../../Button';
import connector from './connector';

class ProfileDropdownContainer extends Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  render() {
    const { handleClick, state, props: { children } } = this;
    return children({ handleClick, ...state });
  }
}

ProfileDropdownContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const ProfileDropdownGroup = styled.div`
  position: relative;
`;

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

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  min-width: 16rem;
  padding: .3rem 0;
  margin: .2rem 0 0;
  list-style: none;
  background-color: ${themeColor('white')};
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.2);
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top left;
  ${props => props.open && css`
    opacity: 1;
    transform: scaleY(1);
  `}
`;

const DropdownItem = styled.li`
  margin: 0;
  padding: 0;
`;

const DropdownStaticText = styled.div`
  display: block;
  padding: .7rem 2rem;
  color: ${themeColor('gray4')};
  font-weight: 700;
`;

const DropdownSeparator = styled.hr`
  margin: 0;
  border: 0;
  border-bottom: 1px solid ${themeColor('gray2')};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: .7rem 2rem;
  text-decoration: none;
  color: ${themeColor('tertiary')};
  font-weight: 500;
  transition: all .15s ${timingFunctions('easeIn')};
  &:hover {
    background-color: ${themeColor('primary')};
    color: ${themeColor('white')};
  }
`;

function ProfileDropdown({ avatar }) {
  return (
    <ProfileDropdownContainer>
      {({ handleClick, open }) => (
        <ProfileDropdownGroup>
          <ProfileImgButton flat onClick={handleClick}>
            <ProfileImg src={avatar || profileImg} />
          </ProfileImgButton>
          <DropdownList open={open}>
            <DropdownItem><DropdownStaticText>User Name</DropdownStaticText></DropdownItem>
            <DropdownSeparator />
            <DropdownItem><DropdownLink to="/account/profile">Profile</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink to="#">Invite a Friend</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink to="/account/settings">Settings</DropdownLink></DropdownItem>
            <DropdownSeparator />
            <DropdownItem><DropdownLink to="/auth/logout">Sign Out</DropdownLink></DropdownItem>
          </DropdownList>
        </ProfileDropdownGroup>
      )}
    </ProfileDropdownContainer>
  );
}

ProfileDropdown.propTypes = {
  avatar: PropTypes.string,
};

ProfileDropdown.defaultProps = {
  avatar: '',
};

export default connector(ProfileDropdown);
