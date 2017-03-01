import * as constants from './constants';

/* BOARD ACTION CREATORS */
export const moveBoardElement = (currentBoard, elementId, newBoard) => ({
  type: constants.MOVE_BOARD_ELEMENT,
  currentBoard,
  elementId,
  newBoard
});

export const addBoard = (title) => ({
  type: constants.ADD_BOARD,
  title,
});

export const deleteBoard = (id) => ({
  type: constants.DELETE_BOARD,
  id,
});

export const deleteBoardElement = (boardId, elementId) => ({
  type: constants.DELETE_BOARD_ELEMENT,
  boardId,
  elementId,
});

export const addBoardElement = (id, title, content) => ({
  type: constants.ADD_BOARD_ELEMENT,
  id,
  title,
  content,
});

/* PROJECT ACTION CREATORS */
export const renameProject = (name) => ({
  type: constants.RENAME_PROJECT,
  name,
});

export const changeDescription = (newDescription) => ({
  type: constants.CHANGE_DESCRIPTION,
  newDescription,
});

export const toggleVisibility = () => ({
  type: constants.TOGGLE_VISIBILITY,
});

export const deleteProject = () => ({
  type: constants.DELETE_PROJECT,
});

/* COLLABORATOR ACTION CREATORS */
export const addCollaborator = (user) => ({
  type: constants.ADD_COLLABORATOR,
  user,
});

export const deleteCollaborator = (id) => ({
  type: constants.DELETE_COLLABORATOR,
  id,
});

export const changeCollaboratorRole = (id) => ({
  type: constants.CHANGE_COLLABORATOR_ROLE,
  id,
});

/* FILE ACTION CREATORS */
export const deleteFile = (id) => ({
  type: constants.DELETE_FILE,
  id,
});

export const editFile = (id, content) => ({
  type: constants.EDIT_FILE,
  id,
  content,
});

export const renameFile = (id, name) => ({
  type: constants.RENAME_FILE,
  id,
  name,
});

export const duplicateFile = (id) => ({
  type: constants.DUPLICATE_FILE,
  id,
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

/* RESOURCE ACTION CREATORS */
export const deleteResource = (resourceId, resourceType) => {
  switch (resourceType) { 
    case 'workspace':
      return stopWorkspace(resourceId);
    case 'model':
      return stopModel(resourceId);
    case 'job':
      return stopJob(resourceId);
    default:
      return;
  }
};

export const startResource = (resourceId, resourceType) => {
  switch (resourceType) { 
    case 'workspace':
      return startWorkspace(resourceId);
    case 'model':
      return startModel(resourceId);
    case 'job':
      return startJob(resourceId);
    default:
      return;
  }
};

export const stopResource = (resourceId, resourceType) => {
  switch (resourceType) { 
    case 'workspace':
      return stopWorkspace(resourceId);
    case 'model':
      return stopModel(resourceId);
    case 'job':
      return stopJob(resourceId);
    default:
      return;
  }
};

export const deleteResources = (resources) => {
  resources.map((resource) => {
    return deleteResource(resource.id, resource.type);
  });
};

export const stopResources = (resources) => {
  resources.map((resource) => {
    return deleteResource(resource.id, resource.type);
  });
};

export const startResources = (resources) => {
  resources.map((resource) => {
    return startResource(resource.id, resource.type);
  });
};
