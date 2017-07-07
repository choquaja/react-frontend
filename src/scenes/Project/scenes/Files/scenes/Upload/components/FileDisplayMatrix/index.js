import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import filesize from 'filesize';
import { themeColor } from '../../../../../../../../services/theme';
import Row from '../../../../../../../../components/shared/row';
import Column from '../../../../../../../../components/shared/column';

const Ul = styled.ul`
  padding-left: 3rem;
`;
const Li = styled.li`
  word-wrap: break-word;
  margin-bottom: .5rem;
`;
const Size = styled.span`
  font-size: .8em;
  color: ${themeColor('gray4')};
`;
const renderFileLi = file => (
  <Li key={file.name}>
    {file.name} <Size>({filesize(file.size)})</Size>
  </Li>
);

function FileDisplayMatrix({ accepted, rejected }) {
  return (
    <Row>
      <Column size={6}>
        <h3>Accepted Files</h3>
        <Ul>
          {accepted.map(renderFileLi)}
        </Ul>
      </Column>
      <Column size={6}>
        <h3>Rejected Files</h3>
        <Ul>
          {rejected.map(renderFileLi)}
        </Ul>
      </Column>
    </Row>
  );
}

FileDisplayMatrix.propTypes = {
  accepted: PropTypes.array.isRequired,
  rejected: PropTypes.array.isRequired,
};

export default FileDisplayMatrix;
