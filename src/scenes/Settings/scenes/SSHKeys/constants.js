import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_SSHKEYS_REQUEST: 'data.settings.sshkeys.GET_SSHKEYS_REQUEST',
  GET_SSHKEYS_SUCCESS: 'data.settings.sshkeys.GET_SSHKEYS_SUCCESS',
  GET_SSHKEYS_FAIL: 'data.settings.sshkeys.GET_SSHKEYS_FAIL',
  RESET_SSHKEY: 'data.settings.sshkeys.RESET_SSHKEY',
};

export const actions = {
  getSshkeysRequest: createAction(types.GET_SSHKEYS_REQUEST),
  getSshkeysSuccess: createAction(types.GET_SSHKEYS_SUCCESS),
  getSshkeysFail: createAction(types.GET_SSHKEYS_FAIL),
  resetSshkey: createAction(types.RESET_SSHKEY),
};
