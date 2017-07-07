import { createLogic } from 'redux-logic';
import { types } from './constants';
import { addLogic } from '../../../../../../services/store';

export const changeUsernameLogic = createLogic({
  type: types.CHANGE_USERNAME,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { id } = extract.state.user(getState());
    const urlParams = { id };
    const username = action.payload.new_username;
    try {
      await api.users.update({ username }, { urlParams });
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  changeUsernameLogic,
]);
