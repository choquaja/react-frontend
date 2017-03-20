import * as types from './types';

/* BOARD ACTION CREATORS */
export const moveBoardElement = (currentBoard, elementId, newBoard) => ({
  type: types.MOVE_BOARD_ELEMENT,
  currentBoard,
  elementId,
  newBoard,
});

export const addBoard = title => ({
  type: types.ADD_BOARD,
  title,
});

export const deleteBoard = id => ({
  type: types.DELETE_BOARD,
  id,
});

export const deleteBoardElement = (boardId, elementId) => ({
  type: types.DELETE_BOARD_ELEMENT,
  boardId,
  elementId,
});

export const addBoardElement = (id, title, content) => ({
  type: types.ADD_BOARD_ELEMENT,
  id,
  title,
  content,
});
