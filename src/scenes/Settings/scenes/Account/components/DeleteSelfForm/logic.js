import { createLogic } from 'redux-logic';
import { types } from './constants';
import { addLogic } from '../../../../../../services/store';

export const deleteSelfLogic = createLogic({
  type: types.DELETE_SELF,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    // const { username: account, id } = extract.state.user(getState());
    // const urlParams = { account, id };
    try {
      // await api.users.delete(null, { urlParams });
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  deleteSelfLogic,
]);
