import { createLogic } from 'redux-logic';
import { types } from './constants';
import { actions as userActions } from '../../../../../../data/user/constants';
import { addLogic } from '../../../../../../services/store';

export const updateProfileLogic = createLogic({
  type: types.UPDATE_PROFILE,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { id } = extract.state.user(getState());
    const urlParams = { id };
    try {
      const response = await api.users.update(action.payload, { urlParams });
      dispatch(userActions.getUserSuccess(response.data));
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  updateProfileLogic,
]);
