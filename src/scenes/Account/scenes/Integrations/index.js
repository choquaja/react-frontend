import React, { PropTypes } from 'react';
import styled from 'styled-components';
import * as Material from 'react-icons/lib/md';
import Button from '../../../../components/Button/index';

const Title = styled.h1`
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  width: 20%;
`;

const Column2 = styled.div`
  width: 70%;
`;

const ButtonImg1 = styled(Button)`
  padding: 0;
  background-color: #f2f7fa;
  border-style: none;
  width: 150px;
  text-align: left;
  box-shadow: none;
`;

const iconStyles = `
  margin-right: 5px;
  margin-left: 5px;
  width: 20px;
  height: 20px;
`;

const IconPerson = styled(Material.MdPerson)`${iconStyles}`;
const IconSettings = styled(Material.MdSettingsApplications)`${iconStyles}`;
const IconEmail = styled(Material.MdEmail)`${iconStyles}`;
const IconSSH = styled(Material.MdVpnKey)`${iconStyles}`;
const IconIntegrations = styled(Material.MdCompareArrows)`${iconStyles}`;

export default function Profile() {
  return (
    <Container>
      <Column1>
        <Title>Username</Title>
        <ButtonImg1><IconPerson />Profile</ButtonImg1>
        <ButtonImg1><IconSettings />Settings</ButtonImg1>
        <ButtonImg1><IconEmail />Emails</ButtonImg1>
        <ButtonImg1><IconSSH />SSH Keys</ButtonImg1>
        <ButtonImg1><IconIntegrations />Integrations</ButtonImg1>
      </Column1>
      <Column2>
        <Title>Integrations</Title>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
