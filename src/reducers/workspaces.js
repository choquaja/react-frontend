import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_WORKSPACE]: function deleteWorkspace(state, action) {
    const { id } = action;
    return state.filter((workspace, index) => {
      return workspace.id !== id;
    });
  },
  [constants.START_WORKSPACE]: function startWorkspace(state, action) {
  }
}, {});
