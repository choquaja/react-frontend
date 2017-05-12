import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const isColumn = props => props.column && css`
  margin: 0 -1rem;
`;

const ContentCard = styled.div`
  padding: 1rem 1rem 2rem;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  overflow: hidden;
  ${isColumn}
`;

ContentCard.propTypes = {
  column: PropTypes.bool,
};

export default ContentCard;
