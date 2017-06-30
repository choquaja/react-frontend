import { createAction } from '../../../../services/store/helpers';

export const types = {
  LOGIN: 'Login.LOGIN',
};

export const actions = {
  login: createAction(types.LOGIN),
};
