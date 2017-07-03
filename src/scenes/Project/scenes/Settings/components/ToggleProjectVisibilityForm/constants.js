import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  TOGGLE_PROJECT_VISIBILITY: 'data.projects.settings.TOGGLE_PROJECT_VISIBILITY',
};

export const actions = {
  toggleProjectVisibility: createAction(types.TOGGLE_PROJECT_VISIBILITY),
};
