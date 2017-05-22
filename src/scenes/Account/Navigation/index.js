import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';
import { themeColor } from '../../../services/theme';

const VerticalNavLink = styled(NavLink)`
  display: block;
  padding: 5px;
  padding-left: 10px;
  margin-left: 10px;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: ${themeColor('cloudGray')};
  }
  &[class~="active"] {
    background-color: rgba(88, 178, 8, 0.5);
  }
`;

function Navigation() {
  return (
    <div>
      <VerticalNavLink
        to={'/account/profile'}
        activeClassName="active"
      >
        <Material.MdPerson className="vertical-nav-icon" />
        Profile
      </VerticalNavLink>
      <VerticalNavLink
        to={'/account/settings'}
        activeClassName="active"
      >
        <Material.MdSettingsApplications className="vertical-nav-icon" />
        Settings
      </VerticalNavLink>
      <VerticalNavLink
        to={'/account/email'}
        activeClassName="active"
      >
        <Material.MdEmail className="vertical-nav-icon" />
        Emails
      </VerticalNavLink>
      <VerticalNavLink
        to={'/account/SSHKeys'}
        activeClassName="active"
      >
        <Material.MdVpnKey className="vertical-nav-icon" />
        SSH-Key
      </VerticalNavLink>
      <VerticalNavLink
        to={'/account/integrations'}
        activeClassName="active"
      >
        <Material.MdCompareArrows className="vertical-nav-icon" />
        Integrations
      </VerticalNavLink>
    </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
