import { createDataReducer } from '../../../../../../services/store/helpers';
import { types } from './constants';
import logic from './logic';

export default createDataReducer(
  types.GET_FIELD_DATA_REQUEST,
  types.GET_FIELD_DATA_SUCCESS,
  types.GET_FIELD_DATA_FAIL,
)();

export const newResourceFormLogic = [
  ...logic,
];
