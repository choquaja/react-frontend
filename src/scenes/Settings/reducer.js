import { combineReducers } from 'redux';
import sshkeys from './scenes/SSHKeys/reducer';

const rootReducer = combineReducers({
  sshkeys,
});

export default rootReducer;
