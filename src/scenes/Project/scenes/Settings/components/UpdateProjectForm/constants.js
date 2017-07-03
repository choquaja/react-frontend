import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  UPDATE_PROJECT: 'data.projects.settings.UPDATE_PROJECT',
};

export const actions = {
  updateProject: createAction(types.UPDATE_PROJECT),
};
