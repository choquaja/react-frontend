import { handleActions } from 'redux-actions';
import merge from 'lodash/merge';
import omit from 'lodash/omit';
import update from 'lodash/update';
import { types } from './constants';

const mergeEntity = newData => oldData => merge({}, oldData, newData);

export default handleActions({
  [types.UPDATE_ENTITIES](state, action) {
    return merge({}, state, action.payload);
  },
  [types.UPDATE_ENTITY](state, action) {
    const { entityType, id, data } = action.payload;
    return update({ ...state }, `${entityType}.${id}`, mergeEntity(data));
  },
  [types.DELETE_ENTITY](state, action) {
    const { entityType, id } = action.payload;
    return omit(state, `${entityType}.${id}`);
  },
}, {});
