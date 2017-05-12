import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const setWidth = (props) => {
  if (props.fluid) return css`max-width: none;`;
  if (props.small) return css`max-width: 80rem;`;
  return css`max-width: 110rem;`;
};

const PageWidth = styled.div`
  ${setWidth}
  margin: 0 auto;
`;

PageWidth.propTypes = {
  fluid: PropTypes.bool,
  small: PropTypes.bool,
};

export default PageWidth;
