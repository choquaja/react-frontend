import { combineReducers } from 'redux';
import newResourceForm, { newResourceFormLogic } from './components/NewForm/reducer';

export default combineReducers({
  newResourceForm,
});

export const newResourceLogic = [
  ...newResourceFormLogic,
];
