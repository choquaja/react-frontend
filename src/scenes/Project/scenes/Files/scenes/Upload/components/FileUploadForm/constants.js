import { createAction } from '../../../../../../../../services/store/helpers';

export const types = {
  UPLOAD_FILE: 'data.projects.files.upload.UPLOAD_FILE',
};

export const actions = {
  uploadFile: createAction(types.UPLOAD_FILE),
};
