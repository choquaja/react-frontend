import { createDataReducer } from '../../services/store/helpers';
import { types } from './constants';

const reducer = createDataReducer(
  types.GET_PROFILE_REQUEST,
  types.GET_PROFILE_SUCCESS,
  types.GET_PROFILE_FAIL,
  types.RESET_PROFILE,
)();

export default reducer;
