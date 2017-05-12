import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const isInverted = props => props.invert && css`
  margin: -1rem -1rem 1rem;
  padding: 1rem;
  background: #333;
  color: white;
`;

const CardTitle = styled.h1`
  font-size: 1.6em;
  margin: 0 0 1rem;
  ${isInverted}
`;

CardTitle.propTypes = {
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CardTitle.defaultProps = {
  invert: false,
};

export default CardTitle;
