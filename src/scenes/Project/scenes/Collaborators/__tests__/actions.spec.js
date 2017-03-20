import * as actions from '../actions';
import * as types from '../types';

it('returns a ADD_COLLABORATOR action', () => {
  expect(actions.addCollaborator({})).toEqual({
    type: types.ADD_COLLABORATOR,
    user: {},
  });
});

it('returns a DELETE_COLLABORATOR action', () => {
  expect(actions.deleteCollaborator(1)).toEqual({
    type: types.DELETE_COLLABORATOR,
    id: 1,
  });
});

it('returns a CHANGE_COLLABORATOR_ROLE action', () => {
  expect(actions.changeCollaboratorRole(1)).toEqual({
    type: types.CHANGE_COLLABORATOR_ROLE,
    id: 1,
  });
});
