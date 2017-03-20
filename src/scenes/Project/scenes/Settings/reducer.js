import { handleActions } from 'redux-actions';
import * as types from './types';

export default handleActions({
  [types.RENAME_PROJECT](state, action) {
    const { newName } = action;
    return state.set('name', newName);
  },
  [types.CHANGE_DESCRIPTION](state, action) {
    const { newDescription } = action;
    return state.set('description', newDescription);
  },
  [types.TOGGLE_VISIBILITY](state) {
    return state.set('isPrivate', !state.get('isPrivate'));
  },
  [types.DELETE_PROJECT]() {
    return null;
  },
}, {});
