import { createAction } from '../../services/store/helpers';

export const types = {
  UPDATE_ENTITIES: 'data.entities.UPDATE_ENTITIES',
};

export const actions = {
  updateEntities: createAction(types.UPDATE_ENTITIES),
};
