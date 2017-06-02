import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_SERVERS_REQUEST: 'data.projects.resources.GET_SERVERS_REQUEST',
  GET_SERVERS_SUCCESS: 'data.projects.resources.GET_SERVERS_SUCCESS',
  GET_SERVERS_FAIL: 'data.projects.resources.GET_SERVERS_FAIL',
};

export const actions = {
  getServersRequest: createAction(types.GET_SERVERS_REQUEST),
  getServersSuccess: createAction(types.GET_SERVERS_SUCCESS),
  getServersFail: createAction(types.GET_SERVERS_FAIL),
};
