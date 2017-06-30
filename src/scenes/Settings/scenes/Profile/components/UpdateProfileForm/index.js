import React from 'react';
import { mapProps, compose } from 'recompose';
import { Field, reduxForm, propTypes } from 'redux-form';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormGroup from '../../../../../../components/FormGroup';
import FormField from '../../../../../../components/FormField';
import { actions } from './constants';

export function UpdateProfileForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field
        name="email"
        component={FormField}
        type="email"
        label="Email Address"
        placeholder="jane@example.com"
      />
      <Field
        name="first_name"
        component={FormField}
        label="First Name"
        placeholder="Jane"
      />
      <Field
        name="last_name"
        component={FormField}
        label="Last Name"
        placeholder="Doe"
      />
      <Field
        name="profile.bio"
        component={FormField}
        type="textarea"
        label="Bio"
        placeholder="A little about yourself..."
      />
      <Field
        name="profile.url"
        component={FormField}
        label="Website"
      />
      <Field
        name="profile.location"
        component={FormField}
        label="Location"
      />
      <FormGroup>
        <Button type="submit" primary flat disabled={!valid || submitting}>Update Profile</Button>
      </FormGroup>
    </form>
  );
}

UpdateProfileForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  email: 'email',
});

export default compose(
  mapProps(({ user }) => ({
    initialValues: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      profile: {
        bio: user.profile.bio,
        url: user.profile.url,
        location: user.profile.location,
      },
    },
  })),
  reduxForm({
    form: 'updateProfile',
    validate,
    onSubmit(values, dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(actions.updateProfile(values, { resolve, reject }));
      });
    },
  }),
)(UpdateProfileForm);
