import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_JOB]: function deleteJob(state, action) {
    return state;
  }
}, {});
