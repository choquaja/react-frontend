import { createAction } from '../../../../services/store/helpers';

export const types = {
  GET_APIKEY_REQUEST: 'data.settings.apikey.GET_APIKEY_REQUEST',
  GET_APIKEY_SUCCESS: 'data.settings.apikey.GET_APIKEY_SUCCESS',
  GET_APIKEY_FAIL: 'data.settings.apikey.GET_APIKEY_FAIL',
  RESET_APIKEY: 'data.settings.apikey.RESET_APIKEY',
};

export const actions = {
  getApiKeyRequest: createAction(types.GET_APIKEY_REQUEST),
  getApiKeySuccess: createAction(types.GET_APIKEY_SUCCESS),
  getApiKeyFail: createAction(types.GET_APIKEY_FAIL),
  resetApiKey: createAction(types.RESET_SSHKEY),
};
