import { combineReducers } from 'redux';
import sshkeys, { sshkeysLogic } from './scenes/SSHKeys/reducer';
import updateProfileLogic from './scenes/Profile/components/UpdateProfileForm/logic';

const rootReducer = combineReducers({
  sshkeys,
});

export default rootReducer;

export const settingsLogic = [
  ...sshkeysLogic,
  ...updateProfileLogic,
];
