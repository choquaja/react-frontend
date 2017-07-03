import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  CHANGE_USERNAME: 'data.settings.profile.CHANGE_USERNAME',
};

export const actions = {
  changeUsername: createAction(types.CHANGE_USERNAME),
};
