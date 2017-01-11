import reducers from '../../reducers';
import preloadedState from '../../store/preloadedState';

it('deletes a board element', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'DELETE_BOARD_ELEMENT',
    boardId: 1,
    elementId: 1
  });
  expect(state.board.get(0).get('elements').size).toEqual(2);
});

it('adds a board element', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'ADD_BOARD_ELEMENT',
  });
});

it.only('updates a board element\'s title', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'EDIT_BOARD_ELEMENT',
    boardId: 1,
    elementId: 1,
    newTitle: 'New Title',
  });
  expect(state.board.get(0).getIn(['elements', 0, 'title'])).toEqual('New Title');
});

it('updates a board element\'s content', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'EDIT_BOARD_ELEMENT',
    boardId: 1,
    elementId: 1,
    content: 'New Content',
  });
  expect(state.board.getIn([0, 'elements', 'content'])).toEqual('New Content');
});

it('deletes a board', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'DELETE_BOARD',
    boardId: 1,
  });
  expect(state.board.size).toEqual(4);
});

it('adds a new board', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'ADD_BOARD',
    name: 'New Board',
  });
  expect(state.board.size).toEqual(6);
  expect(state.board.getIn([5, 'name'])).toEqual('New Board');
});
