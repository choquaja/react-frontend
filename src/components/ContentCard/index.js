import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeColor } from '../../services/theme';

const isColumn = props => props.column && css`
  margin: 0 -1rem;
`;

const isTight = props => props.tight && css`
  padding: 0;
`;

const ContentCard = styled.div`
  padding: 1rem 1rem 2rem;
  ${isTight}
  border-radius: 3px;
  background-color: ${themeColor('white')};
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  overflow: hidden;
  position: relative;
  ${isColumn}
`;

ContentCard.propTypes = {
  column: PropTypes.bool,
  tight: PropTypes.bool,
};

export default ContentCard;
