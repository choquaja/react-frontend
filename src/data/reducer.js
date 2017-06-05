import { combineReducers } from 'redux';
import entities from './entities/reducer';
import user, { userLogic } from './user/reducer';

const rootReducer = combineReducers({
  entities,
  user,
});

export default rootReducer;

export const logic = [
  ...userLogic,
];
