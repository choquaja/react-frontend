import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.RENAME_PROJECT]: function(state, action) {
    const { newName } = action;
    return state.set('name', newName);
  },
  [constants.CHANGE_DESCRIPTION]: function(state, action) {
    const { newDescription } = action;
    return state.set('description', newDescription);
  },
  [constants.TOGGLE_VISIBILITY]: function(state, action) {
    return state.set('isPivate', !state.get('isPrivate'));
  },
  [constants.DELETE_PROJECT]: function(state, action) {
    return null;
  }
}, {});
