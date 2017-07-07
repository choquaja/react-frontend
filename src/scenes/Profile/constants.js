import { createAction } from '../../services/store/helpers';

export const types = {
  GET_PROFILE_REQUEST: 'data.profile.GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'data.profile.GET_PROFILE_SUCCESS',
  GET_PROFILE_FAIL: 'data.profile.GET_PROFILE_FAIL',
  RESET_PROFILE: 'data.profile.RESET_PROFILE',
};

export const actions = {
  getProfileRequest: createAction(types.GET_PROFILE_REQUEST),
  getProfileSuccess: createAction(types.GET_PROFILE_SUCCESS),
  getProfileFail: createAction(types.GET_PROFILE_FAIL),
  resetProfile: createAction(types.RESET_PROFILE),
};
