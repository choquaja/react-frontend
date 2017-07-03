import React from 'react';
import { compose } from 'redux';
import { reduxForm, propTypes } from 'redux-form';
import FormGroup from '../../../../../../components/FormGroup';
import FormError from '../../../../../../components/FormError';
import Button from '../../../../../../components/Button';
import { actions } from '../../constants';

export function ResetApiKeyForm(props) {
  const { handleSubmit, error, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <FormGroup>
        <Button type="submit" primary disabled={submitting}>Reset API Key</Button>
      </FormGroup>
    </form>
  );
}

ResetApiKeyForm.propTypes = {
  ...propTypes,
};

export default compose(
  reduxForm({
    form: 'resetApiKey',
    onSubmit(values, dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(actions.resetApiKey(null, { resolve, reject }));
      });
    },
  }),
)(ResetApiKeyForm);
