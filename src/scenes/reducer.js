import { combineReducers } from 'redux';
import project from './Project/reducer';

const rootReducer = combineReducers({
  project,
});

export default rootReducer;
