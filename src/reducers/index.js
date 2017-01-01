import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import board from './board';

const rootReducer = combineReducers({
  board,
  routing, 
}); 

export default rootReducer;
