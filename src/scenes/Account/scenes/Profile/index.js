import React, { PropTypes } from 'react';
import styled from 'styled-components';
import * as Material from 'react-icons/lib/md';
import AvatarEditor from 'react-avatar-editor';
import Button from '../../../../components/Button/index';
import profileImg from '../images/profile.png';

const Title = styled.h1`
  font-size: 2em;
`;

const h3 = styled.h3`
  font-size: 1em;
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

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
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
        <Title>Profile</Title>
        <h3>Profile Picture</h3>
        <AvatarEditor
          image={profileImg}
          width={50}
          height={50}
          border={5}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={0.5}
          rotate={0}
        />
        <h5><ButtonImg>Upload new picture</ButtonImg></h5>
        <h3>First name</h3>
        <Input type="text" />
        <h3>Last name</h3>
        <Input type="text" />
        <h3>Public Email</h3>
        <Input type="text" />
        <h3>URL</h3>
        <Input type="text" />
        <h3>Company</h3>
        <Input type="text" />
        <h3>Location</h3>
        <Input type="text" />
        <h3>Timezone</h3>
        <Input type="text" />
        <h5><ButtonImg>Update Profile</ButtonImg></h5>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
