import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_MODEL]: function deleteModel(state, action) {
    return state;
  }
}, {});
