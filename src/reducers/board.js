import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from '../actions/constants';

export default handleActions({
  [constants.DELETE_BOARD_ELEMENT]: function deleteBoardElement(state, action) {
    const { boardId, elementId } = action;
    return state.update(state.findIndex((board) => {
      return board.get('id') === boardId;
    }), (board) => {
      return board.update('elements', (elements) => {
        return elements.filter((element) => {
          return element.get('id') !== elementId;
        })
      })
    });
  },
  [constants.ADD_BOARD_ELEMENT]: function addBoardElement(state, action) {
    const { boardId, title, content } = action;
    return state.update(state.findIndex((board) => {
      return board.get('boardId') === boardId;
    }), (board) => {
      const elements = board.get('elements');
      return elements.push(Immutable.Map({
        key: elements.size,
        id: elements.size,
        title,
        content,        
      }));
    });
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
    return state.update(state.findIndex((board) => {
      return board.get('id') === boardId;
    }), (board) => {
      return board.update('elements', (elements) => {
        return elements.update(elements.findIndex((element) => {
          return element.get('id') === elementId;
        }), (element) => {
          return element.set('title', newTitle)
                        .set('content', newContent);
        })
      })
    });
  }
}, {});
