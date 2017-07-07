import React from 'react';
import PropTypes from 'prop-types';
import FormError from '../FormError';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';
import FormLabel from '../FormLabel';
import FormGroup from '../FormGroup';

const FormField = ({ type, input, meta, label, ...rest }) => ( // eslint-disable-line
  <FormGroup>
    <FormLabel htmlFor={`${meta.form}-${input.name}`}>{label}</FormLabel>
    {type === 'textarea' ? (
      <FormTextarea id={`${meta.form}-${input.name}`} {...input} full {...rest} />
    ) : (
      <FormInput id={`${meta.form}-${input.name}`} type={type} {...input} full {...rest} />
    )}
    {meta.touched && meta.error &&
    <FormError>{meta.error}</FormError>}
  </FormGroup>
);

FormField.defaultProps = {
  type: '',
};

FormField.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
