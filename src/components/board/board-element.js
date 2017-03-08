import React from 'react';
import styled from 'styled-components';
import { getThemeColor } from '../styles'

const BoardElementWrapper = styled.div`
  width: 90%;
  margin: 0 auto 10px;
  min-height: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: ${getThemeColor('cloudGray')};
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

class BoardElement extends React.Component {
  render() {
    return (
      <BoardElementWrapper id={this.props.element.get('id')}>
        <BoardElementName>
          {this.props.element.get('title')}
        </BoardElementName>
        <BoardElementContent>
          {this.props.element.get('content')}
        </BoardElementContent>
      </BoardElementWrapper>
    );
  }
}

export default BoardElement;
