import { handleActions } from 'redux-actions';
import * as types from './types';

export default handleActions({
  [types.DELETE_RESOURCE]: function deleteResource(state, action) {
    const { id } = action;
    return state.filter(resource => resource.get('id') !== id);
  },
  [types.START_WORKSPACE]: function startWorkspace(state) {
    return state;
  },
}, {});
