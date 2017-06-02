import { createAction } from '../../services/store/helpers';

export const types = {
  GET_PROJECT_REQUEST: 'data.projects.GET_PROJECT_REQUEST',
  GET_PROJECT_SUCCESS: 'data.projects.GET_PROJECT_SUCCESS',
  GET_PROJECT_FAIL: 'data.projects.GET_PROJECT_FAIL',
  RESET_PROJECT: 'data.projects.RESET_PROJECT',
};

export const actions = {
  getProjectRequest: createAction(types.GET_PROJECT_REQUEST),
  getProjectSuccess: createAction(types.GET_PROJECT_SUCCESS),
  getProjectFail: createAction(types.GET_PROJECT_FAIL),
  resetProject: createAction(types.RESET_PROJECT),
};
