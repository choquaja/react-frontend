import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';


const Title = styled.h1`
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
`;

const Column2 = styled.div`
  width: 70%;
`;

export default function Profile() {
  return (
    <Container>
      <Column2>
        <Title>SSH Keys</Title>
        <h2>SSH Public Key</h2>
        <Button primary block>Reset SSH Key</Button>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
