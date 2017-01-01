import * as constants from './constants';

export const moveElement = (element, newBoard) => ({
  type: constants.MOVE_ELEMENT,
  element,
  newBoard,
});
