import { createDataReducer } from '../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_PROJECTS_REQUEST,
  types.GET_PROJECTS_SUCCESS,
  types.GET_PROJECTS_FAIL,
)();

export const homeLogic = [
  ...logic,
];
