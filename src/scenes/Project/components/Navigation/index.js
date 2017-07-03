import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdRemoveRedEye,
  MdFolder,
  MdBuild,
  MdPeople,
  MdSettings,
} from 'react-icons/lib/md';
import VerticalNavLink from '../../../../components/VerticalNavLink';

const iconStyles = css`
  margin-right: .8rem;
`;

const OverviewIcon = styled(MdRemoveRedEye)`${iconStyles}`;
const FilesIcon = styled(MdFolder)`${iconStyles}`;
const ResourcesIcon = styled(MdBuild)`${iconStyles}`;
const CollaboratorsIcon = styled(MdPeople)`${iconStyles}`;
const SettingsIcon = styled(MdSettings)`${iconStyles}`;

function Navigation({ userName, projectName }) {
  const projectPath = `/${userName}/${projectName}`;
  return (
    <div>
      <VerticalNavLink to={`${projectPath}/overview`}>
        <OverviewIcon size={20} />
        Overview
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/files`}>
        <FilesIcon size={20} />
        Files
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/resources`}>
        <ResourcesIcon size={19} />
        Resources
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/collaborators`}>
        <CollaboratorsIcon size={20} />
        Collaborators
      </VerticalNavLink>
      <VerticalNavLink to={`${projectPath}/settings`}>
        <SettingsIcon size={20} />
        Settings
      </VerticalNavLink>
    </div>
  );
}

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default Navigation;
