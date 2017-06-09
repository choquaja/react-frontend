import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import get from 'lodash/fp/get';
import { types, actions } from './constants';
import { actions as entityActions } from '../../data/entities/constants';
import { projectSchema } from '../../services/api/schema';

export const getProjectsLogic = createLogic({
  type: types.GET_PROJECTS_REQUEST,
  latest: true,
  async process({ getState, action, api }, dispatch, done) {
    const account = get('data.user.data.username')(getState());
    const urlParams = { account };
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
