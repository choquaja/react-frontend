import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  DELETE_PROJECT: 'data.projects.settings.DELETE_PROJECT',
};

export const actions = {
  deleteProject: createAction(types.DELETE_PROJECT),
};
