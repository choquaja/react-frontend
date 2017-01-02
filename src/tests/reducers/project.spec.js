import reducers from '../../reducers';
import preloadedState from '../../store/preloadedState';

it('renames a project', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'RENAME_PROJECT',
    newName: 'New Project Name',
  });
  expect(state.project.get('name')).toEqual('New Project Name');
});

it('updates the description', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'CHANGE_DESCRIPTION',
    newDescription: 'New Project Description',
  });
  expect(state.project.get('description')).toEqual('New Project Description');
});

it('toggles the visibility', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'TOGGLE_VISIBILITY',
  });
  expect(state.project.get('isPrivate')).toBeTruthy();
});

it('deletes a project', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'DELETE_PROJECT',
  });
  expect(state.project).toBeNull();
});
