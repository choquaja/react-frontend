import { createLogic } from 'redux-logic';
import { types } from './constants';
import { addLogic } from '../../../../../../services/store';

export const changePasswordLogic = createLogic({
  type: types.CHANGE_PASSWORD,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { username: account, id } = extract.state.user(getState());
    const urlParams = { account, id };
    const password = action.payload.new_password;
    try {
      await api.users.update({ password }, { urlParams });
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  changePasswordLogic,
]);
