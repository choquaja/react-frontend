import { createLogic } from 'redux-logic';
import jwtDecode from 'jwt-decode';
import { types, actions } from './constants';
import { getToken } from '../../services/authToken';

export const getUserLogic = createLogic({
  type: types.GET_USER_REQUEST,
  latest: true,
  async process({ action, api, history }, dispatch, done) {
    const { user_id } = jwtDecode(getToken());
    const urlParams = { id: user_id };
    try {
      const response = await api.users.get(null, { urlParams });
      dispatch(actions.getUserSuccess(response.data));
    } catch (error) {
      dispatch(actions.getUserFail(error));
      history.push('/auth/logout');
    }
    done();
  },
});

export default [
  getUserLogic,
];
