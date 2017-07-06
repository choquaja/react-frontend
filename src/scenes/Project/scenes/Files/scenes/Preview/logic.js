import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { fileSchema } from '../../../../../../services/api/schema';
import { addLogic } from '../../../../../../services/store';

export const getFileLogic = createLogic({
  type: types.GET_FILE_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project, id } = action.payload;
    const urlParams = { account, project, id };
    const params = { content: true };
    try {
      const response = await api.projects.files.get(null, { urlParams, params });
      const normalized = normalize(response.data, fileSchema);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getFileSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getFileFail(error));
    }
    done();
  },
});

addLogic([
  getFileLogic,
]);
