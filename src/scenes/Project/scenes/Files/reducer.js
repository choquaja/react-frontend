import { handleActions } from 'redux-actions';
import * as types from './types';

export default handleActions({
  [types.DELETE_FILE](state) {
    return state;
  },
}, {});
