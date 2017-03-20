import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as types from './types';

export default handleActions({
  [types.DELETE_BOARD_ELEMENT]: function deleteBoardElement(state, action) {
    const { boardId, elementId } = action;
    return state.update(state.findIndex(board => board.get('id') === boardId), board => board.update('elements', elements => elements.filter(element => element.get('id') !== elementId)));
  },
  [types.ADD_BOARD_ELEMENT]: function addBoardElement(state, action) {
    const { boardId, title, content } = action;
    return state.update(state.findIndex(board => board.get('boardId') === boardId), (board) => {
      const elements = board.get('elements');
      return elements.push(Immutable.Map({
        key: elements.size,
        id: elements.size,
        title,
        content,
      }));
    });
  },
  [types.DELETE_BOARD]: function deleteBoard(state, action) {
    const { boardId } = action;
    return state.deleteIn([boardId]);
  },
  [types.ADD_BOARD]: function addBoard(state, action) {
    const { name } = action;
    const size = state.size;
    return state.push(Immutable.Map({
      id: size + 1,
      name,
      elements: Immutable.List([]),
    }));
  },
  [types.EDIT_BOARD_ELEMENT]: function editBoardElement(state, action) {
    const { boardId, elementId, newTitle, newContent } = action;
    return state.update(state.findIndex(board => board.get('id') === boardId), board => board.update('elements', elements => elements.update(elements.findIndex(element => element.get('id') === elementId), element => element.set('title', newTitle)
                        .set('content', newContent))));
  },
}, {});
