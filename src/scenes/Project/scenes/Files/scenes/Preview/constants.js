import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  GET_FILE_REQUEST: 'data.projects.files.preview.GET_FILE_REQUEST',
  GET_FILE_SUCCESS: 'data.projects.files.preview.GET_FILE_SUCCESS',
  GET_FILE_FAIL: 'data.projects.files.preview.GET_FILE_FAIL',
};

export const actions = {
  getFileRequest: createAction(types.GET_FILE_REQUEST),
  getFileSuccess: createAction(types.GET_FILE_SUCCESS),
  getFileFail: createAction(types.GET_FILE_FAIL),
};
