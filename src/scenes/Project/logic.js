import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../data/entities/constants';
import { projectSchema } from '../../services/api/schema';

export const getProjectLogic = createLogic({
  type: types.GET_PROJECT_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project } = action.payload;
    const urlParams = { account };
    const params = { name: project };
    try {
      const response = await api.projects.list(null, { urlParams, params });
      const normalized = normalize(response.data[0], projectSchema);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getProjectSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getProjectFail(error));
    }
    done();
  },
});

export default [
  getProjectLogic,
];
