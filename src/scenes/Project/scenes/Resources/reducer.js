import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_SERVERS_REQUEST,
  types.GET_SERVERS_SUCCESS,
  types.GET_SERVERS_FAIL,
);

export const resourcesLogic = [
  ...logic,
];
