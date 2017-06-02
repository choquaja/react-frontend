import { createLogic } from 'redux-logic';
import jwtDecode from 'jwt-decode';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../data/entities/constants';
import { getToken } from '../../services/authToken';
import { projectSchema } from '../../services/api/schema';

export const getProjectsLogic = createLogic({
  type: types.GET_PROJECTS_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { username } = jwtDecode(getToken());
    const urlParams = { account: username };
    try {
      const response = await api.projects.list(null, { urlParams });
      const normalized = normalize(response.data, [projectSchema]);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getProjectsSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getProjectsFail(error));
    }
    done();
  },
});

export default [
  getProjectsLogic,
];
