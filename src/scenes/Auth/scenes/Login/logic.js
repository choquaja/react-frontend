import { createLogic } from 'redux-logic';
import getOr from 'lodash/fp/getOr';
import { types } from './constants';
import { login } from '../../../../services/authToken';
import { addLogic } from '../../../../services/store';

const getNext = getOr('/')('meta.next');

export const loginLogic = createLogic({
  type: types.LOGIN,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
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

addLogic([
  loginLogic,
]);
