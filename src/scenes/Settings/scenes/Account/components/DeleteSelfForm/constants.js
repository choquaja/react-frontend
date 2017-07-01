import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  DELETE_SELF: 'data.settings.profile.DELETE_SELF',
};

export const actions = {
  deleteSelf: createAction(types.DELETE_SELF),
};
