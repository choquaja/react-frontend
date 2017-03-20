import { handleActions } from 'redux-actions';
import * as types from './types';

export default handleActions({
  [types.ADD_COLLABORATOR]: function addCollaborator(state, action) {
    const { user } = action;
    return state.push(user);
  },
  [types.DELETE_COLLABORATOR]: function deleteCollaborator(state, action) {
    const { userId } = action;
    return state.filter(collaborator => collaborator.get('userId') !== userId);
  },
  [types.CHANGE_COLLABORATOR_ROLE]: function changeCollaboratorRole(state, action) {
    const { userId } = action;
    return state.update(state.findIndex(collaborator => collaborator.get('userId') === userId), collaborator => collaborator.set('isOwner', !collaborator.get('isOwner')));
  },
}, {});
