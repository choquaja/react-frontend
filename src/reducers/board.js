import { handleActions } from 'redux-actions';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.MOVE_ELEMENT]: function moveElement(state, action) {
    return state;
  }
}, {});
