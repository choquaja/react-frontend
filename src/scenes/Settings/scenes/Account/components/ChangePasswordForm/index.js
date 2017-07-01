import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormGroup from '../../../../../../components/FormGroup';
import FormField from '../../../../../../components/FormField';
import { actions } from './constants';
import './logic';

export function ChangePasswordForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field
        name="old_password"
        component={FormField}
        type="password"
        label="Old Password"
      />
      <Field
        name="new_password"
        component={FormField}
        type="password"
        label="New Password"
      />
      <Field
        name="confirm_password"
        component={FormField}
        type="password"
        label="Confirm Password"
      />
      <FormGroup>
        <Button type="submit" primary flat disabled={!valid || submitting}>Change Password</Button>
      </FormGroup>
    </form>
  );
}

ChangePasswordForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  old_password: 'required',
  new_password: 'required|different:old_password',
  confirm_password: 'required|same:new_password',
});

export default reduxForm({
  form: 'changePassword',
  validate,
  onSubmit(values, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(actions.changePassword(values, { resolve, reject }));
    });
  },
})(ChangePasswordForm);
