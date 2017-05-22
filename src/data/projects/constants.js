import { createAction } from '../../services/store/helpers';

export const types = {
  GET_PROJECTS_REQUEST: 'data.projects.GET_PROJECTS_REQUEST',
  GET_PROJECTS_SUCCESS: 'data.projects.GET_PROJECTS_SUCCESS',
  GET_PROJECTS_FAIL: 'data.projects.GET_PROJECTS_FAIL',
};

export const actions = {
  getProjectsRequest: createAction(types.GET_PROJECTS_REQUEST),
  getProjectsSuccess: createAction(types.GET_PROJECTS_SUCCESS),
  getProjectsFail: createAction(types.GET_PROJECTS_FAIL),
};
