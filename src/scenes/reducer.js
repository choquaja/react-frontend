import { combineReducers } from 'redux';
import home from './Home/reducer';
import project from './Project/reducer';
import { logic as authLogic } from './Auth/reducer';

const rootReducer = combineReducers({
  home,
  project,
});

export default rootReducer;

export const logic = [
  ...authLogic,
];
