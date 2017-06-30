import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  MdPerson,
  MdSettingsApplications,
  // MdEmail,
  MdVpnKey,
  MdCompareArrows,
} from 'react-icons/lib/md';
import VerticalNavLink from '../../../../components/VerticalNavLink';

const iconStyles = css`
  margin-right: .8rem;
`;

const ProfileIcon = styled(MdPerson)`${iconStyles}`;
const SettingsIcon = styled(MdSettingsApplications)`${iconStyles}`;
// const EmailsIcon = styled(MdEmail)`${iconStyles}`;
const SshKeysIcon = styled(MdVpnKey)`${iconStyles}`;
const IntegrationsIcon = styled(MdCompareArrows)`${iconStyles}`;

function Navigation({ url }) {
  return (
    <div>
      <VerticalNavLink to={`${url}/profile`}>
        <ProfileIcon size={20} />
        Profile
      </VerticalNavLink>
      <VerticalNavLink to={`${url}/settings`}>
        <SettingsIcon size={20} />
        Settings
      </VerticalNavLink>
      {/* <VerticalNavLink to={`${url}/email`}>
        <EmailsIcon size={20} />
        Emails
      </VerticalNavLink> */}
      <VerticalNavLink to={`${url}/sshkeys`}>
        <SshKeysIcon size={20} />
        SSH Key
      </VerticalNavLink>
      <VerticalNavLink to={`${url}/integrations`}>
        <IntegrationsIcon size={20} />
        Integrations
      </VerticalNavLink>
    </div>
  );
}

Navigation.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Navigation;
