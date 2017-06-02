import { handleActions } from 'redux-actions';
import merge from 'lodash/merge';
import { types } from './constants';

export default handleActions({
  [types.UPDATE_ENTITIES](state, action) {
    return merge({}, state, action.payload);
  },
}, {});
