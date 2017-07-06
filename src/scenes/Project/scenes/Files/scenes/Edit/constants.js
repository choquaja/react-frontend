import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  GET_FILE_REQUEST: 'data.projects.files.edit.GET_FILE_REQUEST',
  GET_FILE_SUCCESS: 'data.projects.files.edit.GET_FILE_SUCCESS',
  GET_FILE_FAIL: 'data.projects.files.edit.GET_FILE_FAIL',
  RESET_REDUCER: 'data.projects.files.edit.RESET_REDUCER',
  SAVE_FILE: 'data.projects.files.edit.SAVE_FILE',
};

export const actions = {
  getFileRequest: createAction(types.GET_FILE_REQUEST),
  getFileSuccess: createAction(types.GET_FILE_SUCCESS),
  getFileFail: createAction(types.GET_FILE_FAIL),
  resetReducer: createAction(types.RESET_REDUCER),
  saveFile: createAction(types.SAVE_FILE),
};
