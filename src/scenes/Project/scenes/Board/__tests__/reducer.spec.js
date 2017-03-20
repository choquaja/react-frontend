import reducer from '../reducer';
import * as types from '../types';
import initialState from './initialState';

it('deletes a board element', () => {
  const state = reducer(initialState, {
    type: types.DELETE_BOARD_ELEMENT,
    boardId: 1,
    elementId: 1,
  });

  expect(state.get(0).get('elements').size).toEqual(2);
});

it('updates a board element\'s title', () => {
  const state = reducer(initialState, {
    type: types.EDIT_BOARD_ELEMENT,
    boardId: 1,
    elementId: 1,
    newTitle: 'New Title',
  });

  expect(state.get(0).getIn(['elements', 0, 'title'])).toEqual('New Title');
});

it('updates a board element\'s content', () => {
  const state = reducer(initialState, {
    type: types.EDIT_BOARD_ELEMENT,
    boardId: 1,
    elementId: 1,
    newContent: 'New Content',
  });

  expect(state.get(0).getIn(['elements', 0, 'content'])).toEqual('New Content');
});

it('deletes a board', () => {
  const state = reducer(initialState, {
    type: types.DELETE_BOARD,
    boardId: 1,
  });

  expect(state.size).toEqual(4);
});

it('adds a new board', () => {
  const state = reducer(initialState, {
    type: types.ADD_BOARD,
    name: 'New Board',
  });

  expect(state.size).toEqual(6);
  expect(state.getIn([5, 'name'])).toEqual('New Board');
});
