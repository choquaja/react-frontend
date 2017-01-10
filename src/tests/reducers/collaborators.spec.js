import reducers from '../../reducers';
import preloadedState from '../../store/preloadedState';

it('adds a collaborator', () => {
  const initialState = preloadedState;
  const user = preloadedState.collaborators.get(1);
  const state = reducers(initialState, {
    type: 'ADD_COLLABORATOR',
    user,
  });
  expect(state.collaborators.size).toEqual(3);
});

it('removes a collaborator', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'DELETE_COLLABORATOR',
    userId: '1',
  });
  expect(state.collaborators.size).toEqual(1);
});

it('changes collaborator role', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'CHANGE_COLLABORATOR_ROLE',
    userId: '1',
  });
  expect(state.collaborators.getIn([0, 'isOwner'])).toBeTruthy();
});
