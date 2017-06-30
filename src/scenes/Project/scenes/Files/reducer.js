import { combineReducers } from 'redux';
import edit, { editLogic } from './scenes/Edit/reducer';
import list from './scenes/List/reducer';
import preview, { previewLogic } from './scenes/Preview/reducer';

const rootReducer = combineReducers({
  edit,
  list,
  preview,
});

export default rootReducer;

export const filesLogic = [
  ...editLogic,
  ...previewLogic,
];
