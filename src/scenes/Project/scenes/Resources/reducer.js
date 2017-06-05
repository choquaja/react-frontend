import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';
import serverActionsLogic from './scenes/ServerActions/logic';

export default createDataReducer(
  types.GET_SERVERS_REQUEST,
  types.GET_SERVERS_SUCCESS,
  types.GET_SERVERS_FAIL,
)({
  [types.UPDATE_SELECTED](state, action) {
    const selected = (!Array.isArray(action.payload) ? [action.payload] : action.payload);
    return {
      ...state,
      selected,
    };
  },
}, { selected: [] });

export const resourcesLogic = [
  ...logic,
  ...serverActionsLogic,
];
