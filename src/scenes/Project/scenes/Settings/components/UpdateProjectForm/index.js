import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm, propTypes } from 'redux-form';
import validator from '../../../../../../services/validator';
import FormGroup from '../../../../../../components/FormGroup';
import FormField from '../../../../../../components/FormField';
import FormError from '../../../../../../components/FormError';
import Button from '../../../../../../components/Button';
import { actions } from './constants';

export function UpdateProjectForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field
        name="name"
        component={FormField}
        label="Project Name"
        placeholder="MyProject"
      />
      <Field
        name="description"
        component={FormField}
        type="textarea"
        label="Project Description"
        placeholder="Your project description..."
      />
      <FormGroup>
        <Button type="submit" success disabled={!valid || submitting}>Update</Button>
      </FormGroup>
    </form>
  );
}

UpdateProjectForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  name: 'required|projectName',
});

export default compose(
  reduxForm({
    form: 'updateProject',
    validate,
    onSubmit(values, dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(actions.updateProject(values, { resolve, reject }));
      });
    },
  }),
)(UpdateProjectForm);
