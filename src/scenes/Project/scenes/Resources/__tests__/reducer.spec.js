import reducer from '../reducer';
import * as types from '../types';
import initialState from './initialState';

it('deletes a workspace', () => {
  const state = reducer(initialState, {
    type: types.DELETE_RESOURCE,
    id: '3',
  });
  expect(state.size).toEqual(2);
});
