import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeColor } from '../../../../../../../../../../services/theme';

const FileItemDiv = styled.div`
  display: flex;
  padding: .8rem 0;
  font-size: 1.8rem;
  cursor: pointer;
  ${props => css`padding-left: ${props.depth * 3}rem;`}
  &:hover {
    background-color: ${themeColor('gray1')};
  }
  ${props => props.isSelected && css`
    &,
    &:hover {
      background-color: ${themeColor('secondary')};
      color: ${themeColor('white')};
    }
  `}
`;

FileItemDiv.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default FileItemDiv;
