import { combineReducers } from 'redux';
import sshkeys, { sshkeysLogic } from './scenes/SSHKeys/reducer';

const rootReducer = combineReducers({
  sshkeys,
});

export default rootReducer;

export const accountLogic = [
  ...sshkeysLogic,
];
