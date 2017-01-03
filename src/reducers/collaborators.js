import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.ADD_COLLABORATOR]: function addCollaborator(state, action) {
    const { user } = action;
    return state.push(user);
  },
  [constants.DELETE_COLLABORATOR]: function deleteCollaborator(state, action) {
    const { userId } = action;
    return state.filter((collaborator) => {
      return collaborator.userId !== userId;
    });
  },
  [constants.CHANGE_COLLABORATOR_ROLE]: function changeCollaboratorRole(state, action) {
    const { userId } = action;
    return state.setIn([userId, 'isOwner'], !state.getIn([userId, 'isOwner']));
  }
}, {});