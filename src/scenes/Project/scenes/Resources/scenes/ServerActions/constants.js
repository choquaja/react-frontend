import { createAction } from '../../../../../../services/store/helpers';

export const types = {
  SERVER_START: 'scenes.project.resources.serverActions.SERVER_START',
  SERVER_STOP: 'scenes.project.resources.serverActions.SERVER_STOP',
  SERVER_DELETE: 'scenes.project.resources.serverActions.SERVER_DELETE',
};

export const actions = {
  serverStart: createAction(types.SERVER_START),
  serverStop: createAction(types.SERVER_STOP),
  serverDelete: createAction(types.SERVER_DELETE),
};
