import getOr from 'lodash/fp/getOr';
import { SubmissionError } from 'redux-form';
import { logout } from '../authToken';

const getApiErrors = getOr({})('response.data');
export const mapErrorResponseToReduxForm = (error) => {
  const apiErrors = getApiErrors(error);
  if (apiErrors.non_field_errors) {
    apiErrors._error = apiErrors.non_field_errors.join(' '); // eslint-disable-line no-underscore-dangle
    delete apiErrors.non_field_errors;
  }
  return new SubmissionError(apiErrors);
};

const getStatus = getOr(0)('response.status');
export const redirectIfAuthInvalid = ({ history }) => (error) => {
  if (getStatus(error) === 401) {
    logout();
    history.push({
      location: '/auth/login',
      state: { next: history.location.pathname },
    });
  }
  return error;
};
