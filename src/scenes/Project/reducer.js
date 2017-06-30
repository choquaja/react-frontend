import { combineReducers, compose } from 'redux';
import { createDataReducer, resetReducer } from '../../services/store/helpers';
import { types } from './constants';
import overview, { overviewLogic } from './scenes/Overview/reducer';
import files, { filesLogic } from './scenes/Files/reducer';
import newResource, { newResourceLogic } from './scenes/NewResource/reducer';
import resources, { resourcesLogic } from './scenes/Resources/reducer';
import collaborators from './scenes/Collaborators/reducer';

const reducer = createDataReducer(
  types.GET_PROJECT_REQUEST,
  types.GET_PROJECT_SUCCESS,
  types.GET_PROJECT_FAIL,
)();

const rootReducer = compose(
  // This is here to clear the whole project branch of
  // our Redux store when leaving the Project scene
  resetReducer(types.RESET_PROJECT),
  combineReducers,
)({
  details: reducer,
  overview,
  files,
  newResource,
  resources,
  collaborators,
});

export default rootReducer;

export const projectLogic = [
  ...overviewLogic,
  ...filesLogic,
  ...newResourceLogic,
  ...resourcesLogic,
];
