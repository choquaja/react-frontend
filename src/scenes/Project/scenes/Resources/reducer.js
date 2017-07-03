import filter from 'lodash/fp/filter';
import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';

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
    const filterData = filter(x => x !== action.payload);
    const data = filterData(state.data);
    const filterSelected = filter(x => x.id !== action.payload);
    const selected = filterSelected(state.selected);
    return {
      ...state,
      data,
      selected,
    };
  },
}, { selected: [] });
