import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  NEW_RESOURCE: 'data.project.newResource.NEW_RESOURCE',
  GET_FIELD_DATA_REQUEST: 'data.project.newResource.GET_FIELD_DATA_REQUEST',
  GET_FIELD_DATA_SUCCESS: 'data.project.newResource.GET_FIELD_DATA_SUCCESS',
  GET_FIELD_DATA_FAIL: 'data.project.newResource.GET_FIELD_DATA_FAIL',
};

export const actions = {
  newResource: createAction(types.NEW_RESOURCE),
  getFieldDataRequest: createAction(types.GET_FIELD_DATA_REQUEST),
  getFieldDataSuccess: createAction(types.GET_FIELD_DATA_SUCCESS),
  getFieldDataFail: createAction(types.GET_FIELD_DATA_FAIL),
};
