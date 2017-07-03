import React from 'react';
import { compose } from 'redux';
import { reduxForm, propTypes } from 'redux-form';
import FormLabel from '../../../../../../components/FormLabel';
import FormGroup from '../../../../../../components/FormGroup';
import FormError from '../../../../../../components/FormError';
import Button from '../../../../../../components/Button';
import { actions } from './constants';
import './logic';

export function DeleteProjectForm(props) {
  const { handleSubmit, error, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <FormGroup>
        <FormLabel>Delete this project forever</FormLabel>
        <Button type="submit" error disabled={submitting}>Delete Project</Button>
      </FormGroup>
    </form>
  );
}

DeleteProjectForm.propTypes = {
  ...propTypes,
};

export default compose(
  reduxForm({
    form: 'deleteProject',
    onSubmit(values, dispatch) {
      const message = 'Are you sure you want to delete this project FOREVER?';
      if (!window.confirm(message)) return null; // eslint-disable-line
      return new Promise((resolve, reject) => {
        dispatch(actions.deleteProject(null, { resolve, reject }));
      });
    },
  }),
)(DeleteProjectForm);
