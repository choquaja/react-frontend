import { createDataReducer } from '../../services/store/helpers';
import { types } from './constants';

export default createDataReducer(
  types.GET_PROJECTS_REQUEST,
  types.GET_PROJECTS_SUCCESS,
  types.GET_PROJECTS_FAIL,
)();
