import { handleActions } from 'redux-actions';
import { INITIAL_DATA_STATE } from '../../services/store/helpers';
import { types } from './constants';

export default handleActions({
  [types.GET_PROJECTS_REQUEST](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.GET_PROJECTS_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  },
  [types.GET_PROJECTS_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
}, INITIAL_DATA_STATE);
