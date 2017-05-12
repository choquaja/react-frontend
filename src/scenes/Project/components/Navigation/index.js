import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdRemoveRedEye, MdFolder, MdBuild, MdPeople, MdSettings } from 'react-icons/lib/md';
import { themeColor } from '../../../../services/theme';

const iconStyles = css`
  margin-right: .8rem;
`;

const OverviewIcon = styled(MdRemoveRedEye)`${iconStyles}`;
const FilesIcon = styled(MdFolder)`${iconStyles}`;
const ResourcesIcon = styled(MdBuild)`${iconStyles}`;
const CollaboratorsIcon = styled(MdPeople)`${iconStyles}`;
const SettingsIcon = styled(MdSettings)`${iconStyles}`;

const VerticalNavLink = styled(NavLink)`
  display: block;
  padding: 1.2rem .8rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: ${themeColor('cloudGray')};
  }
  &[class~="active"] {
    background-color: #f2994a;
    color: white;
  }
`;

const NavWrapper = styled.div`
  font-size: 1.1em;
`;


function Navigation({ userName, projectName }) {
  const projectPath = `/${userName}/${projectName}`;
  return (
    <NavWrapper>
      <VerticalNavLink to={`${projectPath}/overview`} activeClassName="active">
        <OverviewIcon size={20} />
        Overview
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/files`} activeClassName="active">
        <FilesIcon size={20} />
        Files
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/resources`} activeClassName="active">
        <ResourcesIcon size={19} />
        Resources
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/collaborators`} activeClassName="active">
        <CollaboratorsIcon size={20} />
        Collaborators
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/settings`} activeClassName="active">
        <SettingsIcon size={20} />
        Settings
      </VerticalNavLink>
    </NavWrapper>
  );
}

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default Navigation;
