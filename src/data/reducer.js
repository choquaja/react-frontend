import { combineReducers } from 'redux';
import projects from './projects/reducer';
import projectsLogic from './projects/logic';

const rootReducer = combineReducers({
  projects,
});

export default rootReducer;

export const logic = [
  ...projectsLogic,
];
