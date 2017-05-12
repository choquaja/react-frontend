import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoContentContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, .04);
  border-radius: 5px;
  min-height: 20rem;
  justify-content: center;
  align-items: center;
`;
const NoContentText = styled.div`
  font-size: 1.1em;
  line-height: 1.7;
  font-style: italic;
  text-align: center;
`;

export default function NoContent(props) {
  return (
    <NoContentContainer>
      <NoContentText>
        {props.children}
      </NoContentText>
    </NoContentContainer>
  );
}

NoContent.propTypes = {
  children: PropTypes.node.isRequired,
};
