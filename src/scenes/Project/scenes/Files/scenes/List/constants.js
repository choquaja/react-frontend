import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  GET_FILES_REQUEST: 'data.projects.files.list.GET_FILES_REQUEST',
  GET_FILES_SUCCESS: 'data.projectsfiles.list.GET_FILES_SUCCESS',
  GET_FILES_FAIL: 'data.projects.files.list.GET_FILES_FAIL',
};

export const actions = {
  getFilesRequest: createAction(types.GET_FILES_REQUEST),
  getFilesSuccess: createAction(types.GET_FILES_SUCCESS),
  getFilesFail: createAction(types.GET_FILES_FAIL),
};