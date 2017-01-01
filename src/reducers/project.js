import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.RENAME_PROJECT]: function(state, action) {
    const { newName } = action;
    state.name = newName;
    return state;
  }
}, {});
