import * as types from './types';

/* FILE ACTION CREATORS */
export const deleteFile = id => ({
  type: types.DELETE_FILE,
  id,
});

export const editFile = (id, content) => ({
  type: types.EDIT_FILE,
  id,
  content,
});

export const renameFile = (id, name) => ({
  type: types.RENAME_FILE,
  id,
  name,
});

export const duplicateFile = id => ({
  type: types.DUPLICATE_FILE,
  id,
});
