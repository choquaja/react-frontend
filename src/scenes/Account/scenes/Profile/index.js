import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AvatarEditor from 'react-avatar-editor';
import Button from '../../../../components/Button';
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
  background-color: #f2994a;
  color: white;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  height: 3.6rem;
  font-weight: 700;
  letter-spacing: normal;
  padding: .5em 1.25em;
  text-align: center;
`;

export default function Profile() {
  return (
    <Container>
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
        <Input />
        <h3>Last name</h3>
        <Input />
        <h3>Public Email</h3>
        <Input />
        <h3>URL</h3>
        <Input />
        <h3>Company</h3>
        <Input />
        <h3>Location</h3>
        <Input />
        <h3>Timezone</h3>
        <Input />
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
