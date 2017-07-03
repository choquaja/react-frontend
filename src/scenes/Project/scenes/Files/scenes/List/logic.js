import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { fileSchema } from '../../../../../../services/api/schema';
import { addLogic } from '../../../../../../services/store';

export const getFilesLogic = createLogic({
  type: types.GET_FILES_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project } = action.payload;
    const urlParams = { account, project };
    try {
      const response = await api.projects.files.list(null, { urlParams });
      const normalized = normalize(response.data, [fileSchema]);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getFilesSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getFilesFail(error));
    }
    done();
  },
});

addLogic([
  getFilesLogic,
]);
