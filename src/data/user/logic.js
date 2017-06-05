import { createLogic } from 'redux-logic';
import jwtDecode from 'jwt-decode';
import { types, actions } from './constants';
import { getToken } from '../../services/authToken';

export const getUserLogic = createLogic({
  type: types.GET_USER_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { username, user_id } = jwtDecode(getToken());
    const urlParams = { account: username, id: user_id };
    try {
      const response = await api.users.get(null, { urlParams });
      dispatch(actions.getUserSuccess(response.data));
    } catch (error) {
      dispatch(actions.getUserFail(error));
    }
    done();
  },
});

export default [
  getUserLogic,
];
