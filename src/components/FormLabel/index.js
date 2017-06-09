import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const FormLabel = styled.label`
  display: block;
  ${props => props.inline && css`
    display: inline-block;
    margin-right: 1.5rem;
  `}
  font-weight: 700;
  margin-bottom: .5rem;
`;

FormLabel.propTypes = {
  inline: PropTypes.bool,
};

FormLabel.defaultProps = {
  inline: false,
};

export default FormLabel;
