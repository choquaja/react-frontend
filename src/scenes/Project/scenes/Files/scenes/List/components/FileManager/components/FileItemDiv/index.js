import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FileItemDiv = styled.div`
  display: flex;
  padding: .6rem 0;
  font-size: 1.8rem;
  cursor: pointer;
  ${props => css`padding-left: ${props.depth * 3}rem;`}
  &:hover {
    background-color: #f2f7fa;
  }
  ${props => props.isSelected && css`
    &,
    &:hover {
      background-color: #1fa2f3;
      color: white;
    }
  `}
`;

FileItemDiv.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default FileItemDiv;
