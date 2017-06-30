import { combineReducers } from 'redux';
import { logic as authLogic } from './Auth/reducer';
import home, { homeLogic } from './Home/reducer';
import project, { projectLogic } from './Project/reducer';
import { projectsLogic } from './Projects/reducer';
import settings, { settingsLogic } from './Settings/reducer';

const rootReducer = combineReducers({
  home,
  project,
  settings,
});

export default rootReducer;

export const logic = [
  ...authLogic,
  ...homeLogic,
  ...projectLogic,
  ...projectsLogic,
  ...settingsLogic,
];
