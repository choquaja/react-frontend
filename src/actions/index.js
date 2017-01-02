import * as constants from './constants';

/* BOARD ACTION CREATORS */
export const moveBoardElement = (element, newBoard) => ({
  type: constants.MOVE_BOARD_ELEMENT,
  element,
  newBoard,
});

export const addBoard = (title) => ({
  type: constants.ADD_BOARD,
  title,
});

export const deleteBoard = (id) => ({
  type: constants.DELETE_BOARD,
});

export const deleteBoardELement = (boardId, elementId) => ({
  type: constants.DELETE_BOARD_ELEMENT,
  boardId,
  elementId,
});

export const addBoardElement = (boardId) => ({
  type: constants.ADD_BOARD_ELEMENT,
  boardId,
});

/* PROJECT ACTION CREATORS */
export const renameProject = (newName) => ({
  type: constants.RENAME_PROJECT,
  newName,
});

export const changeDescription = (newDescription) => ({
  type: constants.CHANGE_DESCRIPTION,
  newDescription,
});

export const toggleVisiblity = () => ({
  type: constants.TOGGLE_VISIBILITY,
});

export const DELETE_PROJECT = () => ({
  type: constants.DELETE_PROJECT,
});

/* COLLABORATOR ACTION CREATORS */
export const addCollaborator = (userId) => ({
  type: constants.ADD_COLLABORATOR,
  userId,
});

export const deleteCollaborator = (userId) => ({
  type: constants.DELETE_COLLABORATOR,
  userId,
});

export const changeCollaboratorRole = (userId, newRole) => ({
  type: constatns.CHANGE_COLLABORATOR_ROLE,
  userId,
  newRole,
});

/* FILE ACTION CREATORS */
export const deleteFile = (fileId) => ({
  type: constants.DELETE_FILE,
  fileId,
});

export const editFile = (fileId, newContent) => ({
  type: constants.EDIT_FILE,
  fileId,
  newContent,
});

export const renameFile = (fileId, newName) => ({
  type: constants.RENAME_FILE,
  fileId,
  newName,
});

export const duplicateFile = (fileId) => ({
  type: constants.DUPLICATE_FILE,
  fileId,
});

/* WORKSPACE ACTION CREATORS */
export const deleteWorkspace = (workspaceId) => ({
  type: constants.DELETE_WORKSPACE,
  workspaceId,
});

export const startWorkspace = (workspaceId) => ({
  type: constants.START_WORKSPACE,
  workspaceId,
});

export const stopWorkspace = (workspaceId) => ({
  type: constants.STOP_WORKSPACE,
  workspaceId,
});

/* JOB ACTION CREATORS */
export const deleteJob = (jobId) => ({
  type: constants.DELETE_JOB,
  jobId,
});

export const startJob = (jobId) => ({
  type: constants.START_JOB,
  jobId,
});

export const stopJob = (jobId) => ({
  type: constants.STOP_JOB,
  jobId,
});

/* MODEL ACTION CREATORS */
export const deleteModel = (modelId) => ({
  type: constants.DELETE_MODEL,
  modelId,
});

export const startModel = (modelId) => ({
  type: constants.START_MODEL,
  modelId,
});

export const stopModel = (modelId) => ({
  type: constants.STOP_MODEL,
  modelId,
});
