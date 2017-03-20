import reducer from '../reducer';
import * as types from '../types';
import initialState from './initialState';

it('renames a project', () => {
  const state = reducer(initialState, {
    type: types.RENAME_PROJECT,
    newName: 'New Project Name',
  });
  expect(state.get('name')).toEqual('New Project Name');
});

it('updates the description', () => {
  const state = reducer(initialState, {
    type: types.CHANGE_DESCRIPTION,
    newDescription: 'New Project Description',
  });
  expect(state.get('description')).toEqual('New Project Description');
});

it('toggles the visibility', () => {
  const state = reducer(initialState, {
    type: types.TOGGLE_VISIBILITY,
  });
  expect(state.get('isPrivate')).toBeTruthy();
});

it('deletes a project', () => {
  const state = reducer(initialState, {
    type: types.DELETE_PROJECT,
  });
  expect(state).toBeNull();
});
