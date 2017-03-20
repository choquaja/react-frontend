import * as types from './types';

/* COLLABORATOR ACTION CREATORS */
export const addCollaborator = user => ({
  type: types.ADD_COLLABORATOR,
  user,
});

export const deleteCollaborator = id => ({
  type: types.DELETE_COLLABORATOR,
  id,
});

export const changeCollaboratorRole = id => ({
  type: types.CHANGE_COLLABORATOR_ROLE,
  id,
});
