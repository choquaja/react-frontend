import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_README_REQUEST: 'data.projects.overview.GET_README_REQUEST',
  GET_README_SUCCESS: 'data.projects.overview.GET_README_SUCCESS',
  GET_README_FAIL: 'data.projects.overview.GET_README_FAIL',
};

export const actions = {
  getReadmeRequest: createAction(types.GET_README_REQUEST),
  getReadmeSuccess: createAction(types.GET_README_SUCCESS),
  getReadmeFail: createAction(types.GET_README_FAIL),
};
