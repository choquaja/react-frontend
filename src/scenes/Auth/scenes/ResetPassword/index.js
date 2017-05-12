import React from 'react';
import PropTypes from 'prop-types';
import CardTitle from '../../../../components/CardTitle';
import Button from '../../../../components/Button';
import FormInput from '../../../../components/FormInput';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';

export default function ResetPassword() {
  return (
    <div>
      <CardTitle invert>Reset Password</CardTitle>
      <p>Enter your account email address to receive an password reset email.
         Follow the instructions in the email to complete the process.</p>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormInput placeholder="Email" full />
      </FormGroup>
      <FormGroup>
        <Button success block flat full>Reset Password</Button>
      </FormGroup>
    </div>
  );
}

ResetPassword.defaultProps = {

};

ResetPassword.propTypes = {
  match: PropTypes.object.isRequired,
};
