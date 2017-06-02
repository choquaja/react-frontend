import { createDataReducer } from '../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_COLLABORATORS_REQUEST,
  types.GET_COLLABORATORS_SUCCESS,
  types.GET_COLLABORATORS_FAIL,
);

export const collaboratorsLogic = [
  ...logic,
];
