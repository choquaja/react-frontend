import PropTypes from 'prop-types';
import styled from 'styled-components';
import { groupedElement, formElementStyles } from '../../services/theme/helpers';

const FormInput = styled.input`
  ${formElementStyles}
  ${props => props.grouped && groupedElement({ borderWidth: '1px', radiusWidth: '2px' })}
`;

FormInput.propTypes = {
  type: PropTypes.string,
  block: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  grouped: PropTypes.bool,
};

FormInput.defaultProps = {
  type: 'text',
  block: false,
  full: false,
  large: false,
  small: false,
  grouped: false,
};

export default FormInput;
