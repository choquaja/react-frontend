import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formElementStyles } from '../../services/theme/helpers';

const FormTextarea = styled.textarea`
  ${formElementStyles}
`;

FormTextarea.propTypes = {
  block: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  grouped: PropTypes.bool,
};

FormTextarea.defaultProps = {
  block: false,
  full: false,
  large: false,
  small: false,
  grouped: false,
};

export default FormTextarea;
