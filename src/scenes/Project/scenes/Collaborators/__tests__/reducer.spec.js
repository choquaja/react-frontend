import reducer from '../reducer';
import * as types from '../types';
import initialState from './initialState';

it('adds a collaborator', () => {
  const user = initialState.get(1);
  const state = reducer(initialState, {
    type: types.ADD_COLLABORATOR,
    user,
  });
  expect(state.size).toEqual(3);
});

it('removes a collaborator', () => {
  const state = reducer(initialState, {
    type: types.DELETE_COLLABORATOR,
    userId: '1',
  });
  expect(state.size).toEqual(1);
});

it('changes collaborator role', () => {
  const state = reducer(initialState, {
    type: types.CHANGE_COLLABORATOR_ROLE,
    userId: '1',
  });
  expect(state.getIn([0, 'isOwner'])).toBeTruthy();
});
