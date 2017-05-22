import { createLogic } from 'redux-logic';
import getOr from 'lodash/fp/getOr';
import * as types from './types';
import { login } from '../../../../services/authToken';

const getResolve = getOr(() => {})('meta.resolve');
const getReject = getOr(() => {})('meta.reject');
const getNext = getOr('/')('meta.next');

export const loginLogic = createLogic({
  type: types.LOGIN,
  latest: true,
  async process({ getState, action, api, history }, dispatch, done) {
    const resolve = getResolve(action);
    const reject = getReject(action);
    const next = getNext(action);
    try {
      const response = await api.auth.login(action.payload);
      login(response.data.token);
      resolve();
      history.push(next);
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

export default [
  loginLogic,
];
