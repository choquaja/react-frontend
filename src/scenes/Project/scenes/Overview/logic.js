import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../data/entities/constants';
import { fileSchema } from '../../../../services/api/schema';
import { addLogic } from '../../../../services/store';

export const getReadmeLogic = createLogic({
  type: types.GET_README_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project } = action.payload;
    const urlParams = { account, project };
    const params = { path: 'README' };
    try {
      const response = await api.projects.files.list(null, { urlParams, params });
      const normalized = normalize(response.data[0], fileSchema);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getReadmeSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getReadmeFail(error));
    }
    done();
  },
});

addLogic([
  getReadmeLogic,
]);
