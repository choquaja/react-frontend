import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_WORKSPACE]: function deleteWorkspace(state, action) {
    const { id } = action;
    return state.map((workspace) => {
      if (workspace.id ===  id) {
        return null;
      }
      return workspace;
    });
  },
  [constants.START_WORKSPACE]: function startWorkspace(state, action) {
  }
}, {});
