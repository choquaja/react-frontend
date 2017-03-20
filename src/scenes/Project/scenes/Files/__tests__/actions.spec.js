import * as actions from '../actions';
import * as types from '../types';

it('returns a DELETE_FILE action', () => {
  expect(actions.deleteFile(1)).toEqual({
    type: types.DELETE_FILE,
    id: 1,
  });
});

it('returns an EDIT_FILE action', () => {
  expect(actions.editFile(1, 'New Content')).toEqual({
    type: types.EDIT_FILE,
    id: 1,
    content: 'New Content',
  });
});

it('returns a RENAME_FILE action', () => {
  expect(actions.renameFile(1, 'New Name')).toEqual({
    type: types.RENAME_FILE,
    id: 1,
    name: 'New Name',
  });
});

it('returns a DUPLICATE_FILE action', () => {
  expect(actions.duplicateFile(1)).toEqual({
    type: types.DUPLICATE_FILE,
    id: 1,
  });
});
