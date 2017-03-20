import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';
import { themeColor } from '../../../../services/theme';

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

function Navigation({ userName, projectId }) {
  return (
    <div>
      <VerticalNavLink
        to={`/${userName}/${projectId}/overview`}
        activeClassName="active"
      >
        <Material.MdRemoveRedEye className="vertical-nav-icon" />
        Overview
      </VerticalNavLink>
      <VerticalNavLink
        to={`/${userName}/${projectId}/board`}
        activeClassName="active"
      >
        <Material.MdDashboard className="vertical-nav-icon" />
        Board
      </VerticalNavLink>
      <VerticalNavLink
        to={`/${userName}/${projectId}/files`}
        activeClassName="active"
      >
        <Material.MdFolder className="vertical-nav-icon" />
        Files
      </VerticalNavLink>
      <VerticalNavLink
        to={`/${userName}/${projectId}/resources`}
        activeClassName="active"
      >
        <Material.MdBuild className="vertical-nav-icon" />
        Resources
      </VerticalNavLink>
      <VerticalNavLink
        to={`/${userName}/${projectId}/collaborators`}
        activeClassName="active"
      >
        <Material.MdPeople className="vertical-nav-icon" />
        Collaborators
      </VerticalNavLink>
      <VerticalNavLink
        to={`/${userName}/${projectId}/settings`}
        activeClassName="active"
      >
        <Material.MdSettings className="vertical-nav-icon" />
        Settings
      </VerticalNavLink>
    </div>
  );
}

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default Navigation;
