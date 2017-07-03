import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_APIKEY_REQUEST,
  types.GET_APIKEY_SUCCESS,
  types.GET_APIKEY_FAIL,
)();
