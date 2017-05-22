import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import scenes, { logic as scenesLogic } from './scenes/reducer';

const rootReducer = combineReducers({
  scenes,
  form,
});

export default rootReducer;

export const logic = [
  ...scenesLogic,
];
