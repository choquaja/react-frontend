import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormGroup from '../../../../../../components/FormGroup';
import FormField from '../../../../../../components/FormField';
import { actions } from './constants';
import './logic';

export function ChangeUsernameForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <p>Changing this can unintended consequences.</p>
      <Field
        name="new_username"
        component={FormField}
        label="New Username"
      />
      <Field
        name="confirm_username"
        component={FormField}
        label="Confirm Username"
      />
      <FormGroup>
        <Button type="submit" primary flat disabled={!valid || submitting}>Change Username</Button>
      </FormGroup>
    </form>
  );
}

ChangeUsernameForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  new_username: 'required',
  confirm_username: 'required|same:new_username',
});

export default reduxForm({
  form: 'changeUsername',
  validate,
  onSubmit(values, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(actions.changeUsername(values, { resolve, reject }));
    });
  },
})(ChangeUsernameForm);
