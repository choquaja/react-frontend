import reducers from '../../reducers';
import preloadedState from '../../store/preloadedState';

it('deletes a workspace', () => {
  const initialState = preloadedState;
  const state = reducers(initialState, {
    type: 'DELETE_WORKSPACE',
    id: '1',
  });
  expect(state.workspaces).toEqual([]);
});
