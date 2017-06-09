import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  NEW_RESOURCE: 'data.projects.new.NEW_RESOURCE',
};

export const actions = {
  newResource: createAction(types.NEW_RESOURCE),
};
