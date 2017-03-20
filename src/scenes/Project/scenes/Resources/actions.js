import * as types from './types';

/* WORKSPACE ACTION CREATORS */
export const deleteWorkspace = workspaceId => ({
  type: types.DELETE_WORKSPACE,
  workspaceId,
});

export const startWorkspace = workspaceId => ({
  type: types.START_WORKSPACE,
  workspaceId,
});

export const stopWorkspace = workspaceId => ({
  type: types.STOP_WORKSPACE,
  workspaceId,
});

/* JOB ACTION CREATORS */
export const deleteJob = jobId => ({
  type: types.DELETE_JOB,
  jobId,
});

export const startJob = jobId => ({
  type: types.START_JOB,
  jobId,
});

export const stopJob = jobId => ({
  type: types.STOP_JOB,
  jobId,
});

/* MODEL ACTION CREATORS */
export const deleteModel = modelId => ({
  type: types.DELETE_MODEL,
  modelId,
});

export const startModel = modelId => ({
  type: types.START_MODEL,
  modelId,
});

export const stopModel = modelId => ({
  type: types.STOP_MODEL,
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
      return {};
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
      return {};
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
      return {};
  }
};

export const deleteResources = (resources) => {
  resources.map(resource => deleteResource(resource.id, resource.type));
};

export const stopResources = (resources) => {
  resources.map(resource => deleteResource(resource.id, resource.type));
};

export const startResources = (resources) => {
  resources.map(resource => startResource(resource.id, resource.type));
};
