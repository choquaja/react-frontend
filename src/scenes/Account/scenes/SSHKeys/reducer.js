import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_SSHKEYS_REQUEST,
  types.GET_SSHKEYS_SUCCESS,
  types.GET_SSHKEYS_FAIL,
)();

export const sshkeysLogic = [
  ...logic,
];
