import * as actions from '../actions';
import * as types from '../types';

it('returns a MOVE_BOARD_ELEMENT action', () => {
  expect(actions.moveBoardElement(1, 1, 2)).toEqual({
    type: types.MOVE_BOARD_ELEMENT,
    currentBoard: 1,
    elementId: 1,
    newBoard: 2,
  });
});

it('returns an ADD_BOARD action', () => {
  expect(actions.addBoard('New Board')).toEqual({
    type: types.ADD_BOARD,
    title: 'New Board',
  });
});

it('returns a DELETE_BOARD action', () => {
  expect(actions.deleteBoard(1)).toEqual({
    type: types.DELETE_BOARD,
    id: 1,
  });
});

it('returns a DELETE_BOARD_ELEMENT action', () => {
  expect(actions.deleteBoardElement(1, 1)).toEqual({
    type: types.DELETE_BOARD_ELEMENT,
    boardId: 1,
    elementId: 1,
  });
});

it('returns an ADD_BOARD_ELEMENT action', () => {
  expect(actions.addBoardElement(1, 'New Title', 'New Content')).toEqual({
    type: types.ADD_BOARD_ELEMENT,
    id: 1,
    title: 'New Title',
    content: 'New Content',
  });
});
