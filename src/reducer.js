import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import data, { logic as dataLogic } from './data/reducer';
import scenes, { logic as scenesLogic } from './scenes/reducer';

const rootReducer = combineReducers({
  data,
  scenes,
  form,
});

export default rootReducer;

export const logic = [
  ...dataLogic,
  ...scenesLogic,
];
