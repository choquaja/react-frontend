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
