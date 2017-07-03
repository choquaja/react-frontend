import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  UPDATE_PROFILE: 'data.settings.profile.UPDATE_PROFILE',
};

export const actions = {
  updateProfile: createAction(types.UPDATE_PROFILE),
};
