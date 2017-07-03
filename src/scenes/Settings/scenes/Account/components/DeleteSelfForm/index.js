import React from 'react';
import { reduxForm, propTypes } from 'redux-form';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormGroup from '../../../../../../components/FormGroup';
import { actions } from './constants';
import './logic';

export function DeleteSelfForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <FormGroup>
        <Button type="submit" error flat disabled={!valid || submitting}>Delete Your Account</Button>
      </FormGroup>
    </form>
  );
}

DeleteSelfForm.propTypes = {
  ...propTypes,
};

export default reduxForm({
  form: 'deleteSelf',
  onSubmit(values, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(actions.deleteSelf(values, { resolve, reject }));
    });
  },
})(DeleteSelfForm);
