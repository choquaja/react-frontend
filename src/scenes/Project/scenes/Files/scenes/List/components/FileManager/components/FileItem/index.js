import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { GoFileText } from 'react-icons/lib/go';
import { MdRemoveRedEye } from 'react-icons/lib/md';
import OpenIndicator from '../OpenIndicator';
import FileItemDiv from '../FileItemDiv';
import IconContainer from '../IconContainer';

const PREVIEW_FILE_TYPES = [
  'md',
  'ipynb',
];
// Final regex: /.*\.(ext1|ext2|ext3)$/
/* eslint-disable */
const PREVIEW_REGEX = new RegExp(`.*\.(${PREVIEW_FILE_TYPES.join('|')})$`);
/* eslint-enable */

const canPreview = name => PREVIEW_REGEX.test(name);

const InfoContainer = styled.div`
  display: flex;
  flex: 1;
`;

const NameContainer = styled.div`
  flex: 1;
`;

const PreviewContainer = styled(Link)`
  color: currentColor;
  margin: -.2rem 1rem -.2rem 0;
  padding: .2rem .6rem;
  font-size: 1.1em;
  border-radius: 2px;
  transition: all .2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, .07);
  }
`;

const PreviewIcon = styled(MdRemoveRedEye)``;

const Preview = withRouter((props) => {
  // console.log('Preview', props);
  const { id, match: { url } } = props;
  return (
    <PreviewContainer to={`${url}/preview/${id}`}>
      <PreviewIcon />
    </PreviewContainer>
  );
});

export default function FileItem({ file, depth, onClick, isSelected }) {
  return (
    <FileItemDiv {...{ depth, isSelected }}>
      <OpenIndicator empty />
      <InfoContainer onClick={onClick}>
        <IconContainer>
          <GoFileText size={20} />
        </IconContainer>
        <NameContainer>{file.name}</NameContainer>
        {canPreview(file.name) && <Preview id={file.id} />}
      </InfoContainer>
    </FileItemDiv>
  );
}

FileItem.propTypes = {
  file: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
