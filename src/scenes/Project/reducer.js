import { combineReducers } from 'redux';
import { createDataReducer } from '../../services/store/helpers';
import { types } from './constants';
import overview, { overviewLogic } from './scenes/Overview/reducer';
// import settings from './scenes/Settings/reducer';
import files, { filesLogic } from './scenes/Files/reducer';
import resources, { resourcesLogic } from './scenes/Resources/reducer';
import collaborators, { collaboratorsLogic } from './scenes/Collaborators/reducer';
import logic from './logic';

const reducer = createDataReducer(
  types.GET_PROJECT_REQUEST,
  types.GET_PROJECT_SUCCESS,
  types.GET_PROJECT_FAIL,
  types.RESET_PROJECT,
);

const rootReducer = combineReducers({
  details: reducer,
  overview,
  // settings,
  files,
  resources,
  collaborators,
});

export default rootReducer;

export const projectLogic = [
  ...logic,
  ...overviewLogic,
  ...filesLogic,
  ...resourcesLogic,
  ...collaboratorsLogic,
];
