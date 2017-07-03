import { createLogic } from 'redux-logic';
import { types, actions } from './constants';
import { addLogic } from '../../../../services/store';

export const getApiKeyLogic = createLogic({
  type: types.GET_APIKEY_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, user } = action.payload;
    const urlParams = { account, user };
    try {
      const response = await api.users.apiKey.get(null, { urlParams });
      dispatch(actions.getApiKeySuccess(response.data.key));
    } catch (error) {
      dispatch(actions.getApiKeyFail(error));
    }
    done();
  },
});

export const resetApiKeyLogic = createLogic({
  type: types.RESET_APIKEY,
  latest: true,
  async process({ getState, action, api, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { username: account, id: user } = extract.state.user(getState());
    const urlParams = { account, user };
    try {
      const response = await api.users.apiKey.reset(null, { urlParams });
      dispatch(actions.getApiKeySuccess(response.data.key));
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  getApiKeyLogic,
  resetApiKeyLogic,
]);
