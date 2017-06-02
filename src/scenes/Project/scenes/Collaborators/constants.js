import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_COLLABORATORS_REQUEST: 'data.projects.resources.GET_COLLABORATORS_REQUEST',
  GET_COLLABORATORS_SUCCESS: 'data.projects.resources.GET_COLLABORATORS_SUCCESS',
  GET_COLLABORATORS_FAIL: 'data.projects.resources.GET_COLLABORATORS_FAIL',
};

export const actions = {
  getCollaboratorsRequest: createAction(types.GET_COLLABORATORS_REQUEST),
  getCollaboratorsSuccess: createAction(types.GET_COLLABORATORS_SUCCESS),
  getCollaboratorsFail: createAction(types.GET_COLLABORATORS_FAIL),
};
