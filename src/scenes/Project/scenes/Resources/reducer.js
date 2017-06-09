import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';
import serverActionsLogic from './scenes/ServerActions/logic';

const filterIfArray = predicate => data => (
  Array.isArray(data) ? data.filter(predicate) : data
);

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
  [types.DELETE_RESOURCE](state, action) {
    const filterData = filterIfArray(x => x !== action.payload);
    const filterSelected = filterIfArray(x => x.id !== action.payload);
    const data = filterData(state.data);
    const selected = filterSelected(state.selected);
    return {
      ...state,
      data,
      selected,
    };
  },
}, { selected: [] });

export const resourcesLogic = [
  ...logic,
  ...serverActionsLogic,
];
