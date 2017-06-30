import { combineReducers } from 'redux';
import home, { homeLogic } from './Home/reducer';
import account, { accountLogic } from './Account/reducer';
import project, { projectLogic } from './Project/reducer';
import { projectsLogic } from './Projects/reducer';
import { logic as authLogic } from './Auth/reducer';

const rootReducer = combineReducers({
  account,
  home,
  project,
});

export default rootReducer;

export const logic = [
  ...authLogic,
  ...accountLogic,
  ...homeLogic,
  ...projectLogic,
  ...projectsLogic,
];
