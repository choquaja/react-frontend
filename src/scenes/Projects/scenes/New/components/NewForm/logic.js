import { createLogic } from 'redux-logic';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { types } from './constants';
import { addLogic } from '../../../../../../services/store';

const getResolve = getOr(() => {})('meta.resolve');
const getReject = getOr(() => {})('meta.reject');

export const newProjectLogic = createLogic({
  type: types.NEW_PROJECT,
  latest: true,
  async process({ getState, action, api, history }, dispatch, done) {
    const resolve = getResolve(action);
    const reject = getReject(action);
    const { username, user_id } = get('data.user.data')(getState());
    const urlParams = { account: username, id: user_id };
    try {
      const response = await api.projects.create(action.payload, { urlParams });
      resolve();
      history.push(`/${response.data.owner}/${response.data.name}/overview`);
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  newProjectLogic,
]);
