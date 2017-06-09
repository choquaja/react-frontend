import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';

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

export default function Profile() {
  return (
    <Container>
      <Column2>
        <Title>Settings</Title>
        <Title>Change Password</Title>
        <h3>Old Password</h3>
        <Input />
        <h3>New Password</h3>
        <Input />
        <h3>Confirm New Password</h3>
        <Input />
        <Button primary block>Update Password</Button>
        <Title>Change Username</Title>
        <p>Changing username could have unintended side effects</p>
        <h3>New username</h3>
        <Input />
        <h3>Confirm New Username</h3>
        <Input />
        <Button primary block>Change Username</Button>
        <Title>API Key</Title>
        <h4>Your API Key</h4>
        <Button primary block>Reset API Key</Button>
        <Title>Delete Account</Title>
        <Button primary block>Delete Account</Button>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
