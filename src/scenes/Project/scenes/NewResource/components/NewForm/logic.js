import { createLogic } from 'redux-logic';
import { denormalize } from 'normalizr';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { types } from './constants';
import { projectSchema } from '../../../../../../services/api/schema';

const getResolve = getOr(() => {})('meta.resolve');
const getReject = getOr(() => {})('meta.reject');
const getProject = (state) => {
  const entities = get('data.entities')(state);
  const projectId = get('scenes.project.details.data')(state);
  const owner = get('owner')(denormalize(projectId, projectSchema, entities));
  const name = get('name')(denormalize(projectId, projectSchema, entities));
  return { account: owner, project: projectId, name };
};

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
  newResourceLogic,
];
