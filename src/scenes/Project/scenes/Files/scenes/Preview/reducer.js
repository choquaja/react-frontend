import { createDataReducer } from '../../../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_FILE_REQUEST,
  types.GET_FILE_SUCCESS,
  types.GET_FILE_FAIL,
)();

export const previewLogic = [
  ...logic,
];
