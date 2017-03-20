import { combineReducers } from 'redux';
import scenes from './scenes/reducer';

const rootReducer = combineReducers({
  scenes,
});

export default rootReducer;
