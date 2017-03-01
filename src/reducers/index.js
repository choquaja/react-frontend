import { combineReducers } from 'redux';
import board from './board';
import project from './project';
import files from './files';
import workspaces from './workspaces';
import models from './models';
import jobs from './jobs';
import collaborators from './collaborators';

const rootReducer = combineReducers({
  board,
  project,
  files,
  workspaces,
  models,
  jobs,
  collaborators
});

export default rootReducer;
