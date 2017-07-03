import React from 'react';
import { compose } from 'redux';
import { reduxForm, propTypes } from 'redux-form';
import FormLabel from '../../../../../../components/FormLabel';
import FormGroup from '../../../../../../components/FormGroup';
import FormError from '../../../../../../components/FormError';
import Button from '../../../../../../components/Button';
import { actions } from './constants';
import './logic';

export function ToggleProjectVisibilityForm(props) {
  const { handleSubmit, error, submitting, isPrivate } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <FormGroup>
        <FormLabel>Make this project { isPrivate ? 'public' : 'private' }</FormLabel>
        <Button type="submit" warning disabled={submitting}>
          Make { isPrivate ? 'Public' : 'Private' }
        </Button>
      </FormGroup>
    </form>
  );
}

ToggleProjectVisibilityForm.propTypes = {
  ...propTypes,
};

export default compose(
  reduxForm({
    form: 'toggleProjectVisibility',
    onSubmit(values, dispatch, props) {
      return new Promise((resolve, reject) => {
        dispatch(actions.toggleProjectVisibility(
          { private: !props.isPrivate },
          { resolve, reject },
        ));
      });
    },
  }),
)(ToggleProjectVisibilityForm);
