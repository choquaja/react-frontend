import * as actions from '../actions';

it('returns a MOVE_BOARD_ELEMENT action', () => {
  expect(actions.moveBoardElement(1, 1, 2)).toEqual({
    type: 'MOVE_BOARD_ELEMENT',
    currentBoard: 1,
    elementId: 1,
    newBoard: 2
  });
});

it('returns an ADD_BOARD action', () => {
  expect(actions.addBoard('New Board')).toEqual({
    type: 'ADD_BOARD',
    title: 'New Board'
  });
});

it('returns a DELETE_BOARD action', () => {
  expect(actions.deleteBoard(1)).toEqual({
    type: 'DELETE_BOARD',
    id: 1
  });
});

it('returns a DELETE_BOARD_ELEMENT action', () => {
  expect(actions.deleteBoardElement(1, 1)).toEqual({
    type: 'DELETE_BOARD_ELEMENT',
    boardId: 1,
    elementId: 1,
  });
});

it('returns an ADD_BOARD_ELEMENT action', () => {
  expect(actions.addBoardElement(1, 'New Title', 'New Content')).toEqual({
    type: 'ADD_BOARD_ELEMENT',
    id: 1,
    title: 'New Title',
    content: 'New Content'
  });
});

it('returns a RENAME_PROJECT action', () => {
  expect(actions.renameProject('New Name')).toEqual({
    type: 'RENAME_PROJECT',
    name: 'New Name',
  });
});

it('returns a CHANGE_DESCRIPTION action', () => {
  expect(actions.changeDescription('New Description')).toEqual({
    type: 'CHANGE_DESCRIPTION',
    newDescription: 'New Description',
  });
});

it('returns a TOGGLE_VISIBILITY action', () => { 
  expect(actions.toggleVisibility()).toEqual({
    type: 'TOGGLE_VISIBILITY',
  });
});

it('returns a DELETE_PROJECT action', () => {
  expect(actions.deleteProject()).toEqual({
    type: 'DELETE_PROJECT'
  });
});

it('returns a ADD_COLLABORATOR action', () => {
  expect(actions.addCollaborator({})).toEqual({
    type: 'ADD_COLLABORATOR',
    user: {}
  });
});

it('returns a DELETE_COLLABORATOR action', () => {
  expect(actions.deleteCollaborator(1)).toEqual({
    type: 'DELETE_COLLABORATOR',
    id: 1
  });
});

it('returns a CHANGE_COLLABORATOR_ROLE action', () => {
  expect(actions.changeCollaboratorRole(1)).toEqual({
    type: 'CHANGE_COLLABORATOR_ROLE',
    id: 1
  });
});

it('returns a DELETE_FILE action', () => {
  expect(actions.deleteFile(1)).toEqual({
    type: 'DELETE_FILE',
    id: 1,
  });
});

it('returns an EDIT_FILE action', () => {
  expect(actions.editFile(1, 'New Content')).toEqual({
    type: 'EDIT_FILE',
    id: 1,
    content: 'New Content',
  });
});

it('returns a RENAME_FILE action', () => {
  expect(actions.renameFile(1, 'New Name')).toEqual({
    type: 'RENAME_FILE',
    id: 1,
    name: 'New Name'
  });
});

it('returns a DUPLICATE_FILE action', () => {
  expect(actions.duplicateFile(1)).toEqual({
    type: 'DUPLICATE_FILE',
    id: 1,
  });
});
