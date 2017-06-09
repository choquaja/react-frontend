import { handleActions } from 'redux-actions';
import { INITIAL_DATA_STATE } from '../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default handleActions({
  [types.GET_USER_REQUEST](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.GET_USER_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  },
  [types.GET_USER_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
}, INITIAL_DATA_STATE);

export const userLogic = [
  ...logic,
];
