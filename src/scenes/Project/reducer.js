import { combineReducers } from 'redux';
import settings from './scenes/Settings/reducer';
import files from './scenes/Files/reducer';
import resources from './scenes/Resources/reducer';
import collaborators from './scenes/Collaborators/reducer';

const rootReducer = combineReducers({
  settings,
  files,
  resources,
  collaborators,
});

export default rootReducer;
