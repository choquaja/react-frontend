import { combineReducers } from 'redux';
import board from './scenes/Board/reducer';
import settings from './scenes/Settings/reducer';
import files from './scenes/Files/reducer';
import resources from './scenes/Resources/reducer';
import collaborators from './scenes/Collaborators/reducer';

const rootReducer = combineReducers({
  board,
  settings,
  files,
  resources,
  collaborators,
});

export default rootReducer;
