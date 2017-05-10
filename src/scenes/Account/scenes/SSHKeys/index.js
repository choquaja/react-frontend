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

const ButtonImg = styled(Button)`
  outline: 0;
  border: none;
  padding: 0;
  background-color: #f2994a;
  color: white;
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.6rem;
  height: 3.6rem;
  font-weight: 700;
  letter-spacing: normal;
  padding: .5em 1.25em;
  text-transform: none;
  text-align: center;
  touch-action: manipulation;
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
        <Title>SSH Keys</Title>
        <h2>SSH Public Key</h2>
        <h5><ButtonImg>Reset SSH Key</ButtonImg></h5>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
