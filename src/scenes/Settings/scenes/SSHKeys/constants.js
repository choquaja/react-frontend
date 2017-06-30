import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_SSHKEYS_REQUEST: 'data.account.settings.GET_SSHKEYS_REQUEST',
  GET_SSHKEYS_SUCCESS: 'data.account.settings.GET_SSHKEYS_SUCCESS',
  GET_SSHKEYS_FAIL: 'data.account.settings.GET_SSHKEYS_FAIL',
  RESET_SSHKEY: 'data.account.settings.RESET_SSHKEY',
};

export const actions = {
  getSshkeysRequest: createAction(types.GET_SSHKEYS_REQUEST),
  getSshkeysSuccess: createAction(types.GET_SSHKEYS_SUCCESS),
  getSshkeysFail: createAction(types.GET_SSHKEYS_FAIL),
  resetSshkey: createAction(types.RESET_SSHKEY),
};
