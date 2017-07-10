import { combineReducers } from 'redux';
import home from './Home/reducer';
import profile from './Profile/reducer';
import project from './Project/reducer';
import settings from './Settings/reducer';

const rootReducer = combineReducers({
  home,
  project,
  profile,
  settings,
});

export default rootReducer;
