import { combineReducers } from 'redux';
import edit from './scenes/Edit/reducer';
import list from './scenes/List/reducer';
import preview from './scenes/Preview/reducer';

const rootReducer = combineReducers({
  edit,
  list,
  preview,
});

export default rootReducer;
