import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  NEW_PROJECT: 'data.projects.new.NEW_PROJECT',
};

export const actions = {
  newProject: createAction(types.NEW_PROJECT),
};
