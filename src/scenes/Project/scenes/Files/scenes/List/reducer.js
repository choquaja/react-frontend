import { createDataReducer } from '../../../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_FILES_REQUEST,
  types.GET_FILES_SUCCESS,
  types.GET_FILES_FAIL,
);

export const listLogic = [
  ...logic,
];
