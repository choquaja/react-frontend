import { createDataReducer } from '../../../../../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_FILE_REQUEST,
  types.GET_FILE_SUCCESS,
  types.GET_FILE_FAIL,
)();
