import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm, propTypes } from 'redux-form';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormInput from '../../../../../../components/FormInput';
import FormDropdown from '../../../../../../components/FormDropdown';
import FormLabel from '../../../../../../components/FormLabel';
import FormGroup from '../../../../../../components/FormGroup';
import { actions } from './constants';
import connector from './connector';

const renderInput = ({ input, meta, label, ...rest }) => ( // eslint-disable-line
  <FormGroup>
    <FormLabel htmlFor={`${meta.form}-${input.name}`}>{label}</FormLabel>
    <FormInput id={`${meta.form}-${input.name}`} {...input} {...rest} full />
    {meta.touched && meta.error &&
    <FormError>{meta.error}</FormError>}
  </FormGroup>
);

const renderDropdown = ({ input, meta, label, ...rest }) => ( // eslint-disable-line
  <FormGroup>
    <FormLabel htmlFor={`${meta.form}-${input.name}`}>{label}</FormLabel>
    <FormDropdown id={`${meta.form}-${input.name}`} {...input} {...rest} full />
    {meta.touched && meta.error &&
    <FormError>{meta.error}</FormError>}
  </FormGroup>
);

const typeOptions = [{ value: 'jupyter', label: 'Jupyter Notebook' }];
const typeToImageMap = {
  jupyter: '3blades/datascience-notebook',
};

export function NewForm(props) {
  const { handleSubmit, error, submitting, valid, data } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>{error}<br />Please try again.</Error>}
      <Field
        name="name"
        component={renderInput}
        label="Resource Name"
        placeholder="MyResource"
      />
      <Field
        name="environment_resources"
        component={renderDropdown}
        label="Server Size"
        options={data.sizeOptions}
      />
      <Field
        name="config.type"
        component={renderDropdown}
        label="Resource Type"
        options={typeOptions}
      />
      <Field
        name="startup_script"
        component={renderInput}
        label="Startup Script (Optional)"
        placeholder="/path/to/file.ext"
      />
      <FormGroup>
        <Button type="submit" success flat disabled={!valid || submitting}>Create</Button>
      </FormGroup>
    </form>
  );
}

NewForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  name: 'required',
  environment_resources: 'required|not_in:false',
  config: {
    type: 'required|not_in:false',
  },
});
const initialValues = {
  environment_resources: false,
  config: {
    type: false,
  },
};

export default compose(
  connector,
  reduxForm({
    form: 'newResource',
    validate,
    initialValues,
    onSubmit(values, dispatch) {
      const updatedValues = {
        ...values,
        image_name: typeToImageMap[values.config.type],
      };
      return new Promise((resolve, reject) => {
        dispatch(actions.newResource(updatedValues, { resolve, reject }));
      });
    },
  }),
)(NewForm);
