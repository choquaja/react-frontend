import { createAction } from '../../services/store/helpers';

export const types = {
  GET_USER_REQUEST: 'data.projects.GET_USER_REQUEST',
  GET_USER_SUCCESS: 'data.projects.GET_USER_SUCCESS',
  GET_USER_FAIL: 'data.projects.GET_USER_FAIL',
  RESET_USER: 'data.projects.RESET_USER',
};

export const actions = {
  getUserRequest: createAction(types.GET_USER_REQUEST),
  getUserSuccess: createAction(types.GET_USER_SUCCESS),
  getUserFail: createAction(types.GET_USER_FAIL),
  resetUser: createAction(types.RESET_USER),
};
