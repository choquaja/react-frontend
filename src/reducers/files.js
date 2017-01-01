import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_FILE]: function(state, action) {
    return state;
  }
}, {});
