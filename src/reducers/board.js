import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_BOARD_ELEMENT]: function deleteBoardElement(state, action) {
    const { boardId, elementId } = action;
    state.board.updateIn([boardId, 'elements'], (elements) => {
      elements.filter((element) => {
        return element.get('id') !== elementId;
      });
    });
  },
  [constants.ADD_BOARD_ELEMENT]: function addBoardElement(state, action) {
    const { boardId, title, content } = action;
    const numElements = state.board.getIn([boardId, 'elements']).size;
    state.board.getIn([boardId, 'elements']).push(Immutable.Map({
      id: numElements + 1,
      title,
      content
    }));
  },
  [constants.DELETE_BOARD]: function deleteBoard(state, action) {
    const { boardId } = action;
    return state.deleteIn([boardId]);
  },
  [constants.ADD_BOARD]: function addBoard(state, action) {
    const { name } = action;
    const size = state.size;
    return state.push(Immutable.Map({
      id: size + 1,
      name,
      elements: Immutable.List([]),
    }));
  },
  [constants.EDIT_BOARD_ELEMENT]: function editBoardElement(state, action) {
    const { boardId, elementId, newTitle, newContent } = action;
    return state.updateIn([boardId, 'elements', elementId], (element) => {
      element.set('title', newTitle).set('content', newContent);
    });
  }
}, {});
