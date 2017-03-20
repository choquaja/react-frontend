import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { themeColor } from '../../../../../../services/theme';

const BoardElementWrapper = styled.div`
  width: 90%;
  margin: 0 auto 10px;
  min-height: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: ${themeColor('cloudGray')};
  border-radius: 2px;
  padding: 10px;
  box-shadow: 0px 0px 2px rgba(0,0,0,.3);
  transition: 0.15s;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const BoardElementName = styled.div`
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 1.05em;
`;

const BoardElementContent = styled.div`
  white-space: normal;
`;

function BoardElement(props) {
  return (
    <BoardElementWrapper id={props.element.get('id')}>
      <BoardElementName>
        {props.element.get('title')}
      </BoardElementName>
      <BoardElementContent>
        {props.element.get('content')}
      </BoardElementContent>
    </BoardElementWrapper>
  );
}

BoardElement.propTypes = {
  element: PropTypes.object.isRequired,
};

export default BoardElement;
