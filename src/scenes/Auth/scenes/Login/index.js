import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, reduxForm, propTypes } from 'redux-form';
import get from 'lodash/fp/get';
import validator from '../../../../services/validator';
import { login } from './actions';
import CardTitle from '../../../../components/CardTitle';
import Button from '../../../../components/Button';
import FormInput from '../../../../components/FormInput';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';

const PasswordResetLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.1em;
  color: #7ae43b;
  text-align: center;
`;

const Error = styled.div`
  padding: .4em 1.4em;
  color: red;
`;

const renderUsername = field => (
  <FormGroup>
    <FormLabel>Username</FormLabel>
    <FormInput {...field.input} placeholder="Username" full />
    {field.meta.touched && field.meta.error &&
    <Error>{field.meta.error}</Error>}
  </FormGroup>
);

const renderPassword = field => (
  <FormGroup>
    <FormLabel>Password</FormLabel>
    <FormInput {...field.input} type="password" placeholder="Password" full />
    {field.meta.touched && field.meta.error &&
    <Error>{field.meta.error}</Error>}
  </FormGroup>
);

export function Login(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <CardTitle invert>Sign In</CardTitle>
      {props.error && <Error>{props.error}<br />Please try again.</Error>}
      <Field name="username" component={renderUsername} />
      <Field name="password" component={renderPassword} />
      <FormGroup>
        <Button type="submit" success block flat full disabled={props.submitting}>Login</Button>
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
