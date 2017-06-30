import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_SSHKEYS_REQUEST,
  types.GET_SSHKEYS_SUCCESS,
  types.GET_SSHKEYS_FAIL,
)();
