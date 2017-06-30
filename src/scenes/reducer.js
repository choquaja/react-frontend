import { combineReducers } from 'redux';
import home from './Home/reducer';
import project, { projectLogic } from './Project/reducer';
import settings, { settingsLogic } from './Settings/reducer';

const rootReducer = combineReducers({
  home,
  project,
  settings,
});

export default rootReducer;

export const logic = [
  ...projectLogic,
  ...settingsLogic,
];
