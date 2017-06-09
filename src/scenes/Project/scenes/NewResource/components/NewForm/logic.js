import { createLogic } from 'redux-logic';
import { normalize, denormalize } from 'normalizr';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { projectSchema, environmentResourcesSchema } from '../../../../../../services/api/schema';

const getResolve = getOr(() => {})('meta.resolve');
const getReject = getOr(() => {})('meta.reject');
const getProject = (state) => {
  const entities = get('data.entities')(state);
  const projectId = get('scenes.project.details.data')(state);
  const owner = get('owner')(denormalize(projectId, projectSchema, entities));
  const name = get('name')(denormalize(projectId, projectSchema, entities));
  return { account: owner, project: projectId, name };
};

export const getFieldDataLogic = createLogic({
  type: types.GET_FIELD_DATA_REQUEST,
  latest: true,
  async process({ getState, api }, dispatch, done) {
    const { account } = getProject(getState());
    const urlParams = { account };
    try {
      const response = await api.servers.resources.list(null, { urlParams });
      const normalized = normalize(response.data, [environmentResourcesSchema]);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getFieldDataSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getFieldDataFail(error));
    }
    done();
  },
});

export const newResourceLogic = createLogic({
  type: types.NEW_RESOURCE,
  latest: true,
  async process({ getState, action, api, history }, dispatch, done) {
    const resolve = getResolve(action);
    const reject = getReject(action);
    const { account, project, name } = getProject(getState());
    const urlParams = { account, project };
    try {
      await api.projects.servers.create(action.payload, { urlParams });
      resolve();
      history.push(`/${account}/${name}/resources`);
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

export default [
  getFieldDataLogic,
  newResourceLogic,
];
