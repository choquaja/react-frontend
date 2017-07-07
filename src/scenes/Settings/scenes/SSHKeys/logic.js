import { createLogic } from 'redux-logic';
import { types, actions } from './constants';
import { addLogic } from '../../../../services/store';

export const getSshkeysLogic = createLogic({
  type: types.GET_SSHKEYS_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { user } = action.payload;
    const urlParams = { user };
    try {
      const response = await api.users.sshKey.get(null, { urlParams });
      dispatch(actions.getSshkeysSuccess(response.data.key));
    } catch (error) {
      dispatch(actions.getSshkeysFail(error));
    }
    done();
  },
});

export const resetSshKeyLogic = createLogic({
  type: types.RESET_SSHKEY,
  latest: true,
  async process({ getState, action, api, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { id: user } = extract.state.user(getState());
    const urlParams = { user };
    try {
      const response = await api.users.sshKey.reset(null, { urlParams });
      dispatch(actions.getSshkeysSuccess(response.data.key));
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  getSshkeysLogic,
  resetSshKeyLogic,
]);
