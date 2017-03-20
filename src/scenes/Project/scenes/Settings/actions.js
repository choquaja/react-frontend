import * as types from './types';

/* PROJECT SETTINGS ACTION CREATORS */
export const renameProject = name => ({
  type: types.RENAME_PROJECT,
  name,
});

export const changeDescription = newDescription => ({
  type: types.CHANGE_DESCRIPTION,
  newDescription,
});

export const toggleVisibility = () => ({
  type: types.TOGGLE_VISIBILITY,
});

export const deleteProject = () => ({
  type: types.DELETE_PROJECT,
});
