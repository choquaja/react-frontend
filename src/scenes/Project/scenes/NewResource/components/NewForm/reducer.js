import { createDataReducer } from '../../../../../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_FIELD_DATA_REQUEST,
  types.GET_FIELD_DATA_SUCCESS,
  types.GET_FIELD_DATA_FAIL,
)();
