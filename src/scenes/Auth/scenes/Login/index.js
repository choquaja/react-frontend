import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, reduxForm, propTypes } from 'redux-form';
import get from 'lodash/fp/get';
import { themeColor } from '../../../../services/theme';
import validator from '../../../../services/validator';
import Button from '../../../../components/Button';
import CardTitle from '../../../../components/CardTitle';
import FormError from '../../../../components/FormError';
import FormInput from '../../../../components/FormInput';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';
import { login } from './actions';

const PasswordResetLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.1em;
  color: ${themeColor('secondary')};
  text-align: center;
  font-weight: 600;
`;

const renderUsername = field => (
  <FormGroup>
    <FormLabel>Username</FormLabel>
    <FormInput {...field.input} placeholder="Username" full />
    {field.meta.touched && field.meta.error &&
    <FormError>{field.meta.error}</FormError>}
  </FormGroup>
);

const renderPassword = field => (
  <FormGroup>
    <FormLabel>Password</FormLabel>
    <FormInput {...field.input} type="password" placeholder="Password" full />
    {field.meta.touched && field.meta.error &&
    <FormError>{field.meta.error}</FormError>}
  </FormGroup>
);

export function Login(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <CardTitle invert>Sign In</CardTitle>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field name="username" component={renderUsername} />
      <Field name="password" component={renderPassword} />
      <FormGroup>
        <Button type="submit" success block flat full disabled={!valid || submitting}>Login</Button>
      </FormGroup>
      <FormGroup>
        <PasswordResetLink to="/auth/reset-password">Forgot password?</PasswordResetLink>
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

export default compose(
  reduxForm({
    form: 'login',
    validate,
    onSubmit(values, dispatch, props) {
      return new Promise((resolve, reject) => {
        dispatch(login(values, { next: getNext(props), resolve, reject }));
      });
    },
  }),
)(Login);
