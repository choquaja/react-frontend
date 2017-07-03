import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_README_REQUEST,
  types.GET_README_SUCCESS,
  types.GET_README_FAIL,
)();
