import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import get from 'lodash/fp/get';
import validator from '../../../../services/validator';
import Button from '../../../../components/Button';
import CardTitle from '../../../../components/CardTitle';
import FormError from '../../../../components/FormError';
import FormField from '../../../../components/FormField';
import FormGroup from '../../../../components/FormGroup';
import PasswordResetLink from './components/PasswordResetLink';
import { actions } from './constants';
import './logic';

export function Login(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <CardTitle invert>Sign In</CardTitle>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field
        name="username"
        component={FormField}
        placeholder="Username"
      />
      <Field
        name="password"
        component={FormField}
        type="password"
        placeholder="Password"
      />
      <FormGroup>
        <Button type="submit" success block flat full disabled={!valid || submitting}>Login</Button>
      </FormGroup>
      <FormGroup>
        <PasswordResetLink />
      </FormGroup>
    </form>
  );
}

Login.propTypes = {
  ...propTypes,
};

const validate = validator({
  username: 'required',
  password: 'required',
});
const getNext = get('location.state.next');

export default reduxForm({
  form: 'login',
  validate,
  onSubmit(values, dispatch, props) {
    return new Promise((resolve, reject) => {
      dispatch(actions.login(values, { next: getNext(props), resolve, reject }));
    });
  },
})(Login);
