import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { groupedElement, formElementStyles } from '../../services/theme/helpers';

const Dropdown = styled.select`
  ${formElementStyles}
  ${props => props.grouped && groupedElement({ borderWidth: '1px', radiusWidth: '2px' })}
`;

const FormDropdown = ({ options, placeholder, ...props }) => (
  <Dropdown {...props}>
    <option value={false} disabled>{placeholder}</option>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>{label}</option>
    ))}
  </Dropdown>
);

FormDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  block: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  grouped: PropTypes.bool,
};

FormDropdown.defaultProps = {
  placeholder: 'Select an option...',
  block: false,
  full: false,
  large: false,
  small: false,
  grouped: false,
};

export default FormDropdown;
