import { createAction } from '../../services/store/helpers';

export const types = {
  UPDATE_ENTITIES: 'data.entities.UPDATE_ENTITIES',
  UPDATE_ENTITY: 'data.entities.UPDATE_ENTITY',
  DELETE_ENTITY: 'data.entities.DELETE_ENTITY',
};

export const actions = {
  updateEntities: createAction(types.UPDATE_ENTITIES),
  updateEntity: createAction(types.UPDATE_ENTITY),
  deleteEntity: createAction(types.DELETE_ENTITY),
};
