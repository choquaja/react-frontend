import { combineReducers } from 'redux';
import project from './Project/reducer';
import { logic as authLogic } from './Auth/reducer';

const rootReducer = combineReducers({
  project,
});

export default rootReducer;

export const logic = [
  ...authLogic,
];
