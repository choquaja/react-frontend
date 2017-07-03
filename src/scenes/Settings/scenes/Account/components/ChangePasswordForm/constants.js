import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  CHANGE_PASSWORD: 'data.settings.profile.CHANGE_PASSWORD',
};

export const actions = {
  changePassword: createAction(types.CHANGE_PASSWORD),
};
