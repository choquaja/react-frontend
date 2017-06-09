import { createLogic } from 'redux-logic';
import { denormalize } from 'normalizr';
import get from 'lodash/fp/get';
import { types } from './constants';
import { actions as resourceActions } from '../../constants';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { projectSchema, resourceSchema } from '../../../../../../services/api/schema';

const getProject = (state) => {
  const entities = get('data.entities')(state);
  const projectId = get('scenes.project.details.data')(state);
  const owner = get('owner')(denormalize(projectId, projectSchema, entities));
  return { account: owner, project: projectId };
};

export const serverStartLogic = createLogic({
  type: types.SERVER_START,
  latest: true,
  async process({ getState, action, api }, dispatch, done) {
    const { account, project } = getProject(getState());
    const createParams = id => ({ urlParams: { account, project, id } });
    const servers = action.payload;
    try {
      await Promise.all(
        servers.map(
          server => api.projects.servers.start(null, createParams(server.id)),
        ),
      );
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    done();
  },
});

export const serverStopLogic = createLogic({
  type: types.SERVER_STOP,
  latest: true,
  async process({ getState, action, api }, dispatch, done) {
    const { account, project } = getProject(getState());
    const createParams = id => ({ urlParams: { account, project, id } });
    const servers = action.payload;
    try {
      await Promise.all(
        servers.map(
          server => api.projects.servers.stop(null, createParams(server.id)),
        ),
      );
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    done();
  },
});

export const serverDeleteLogic = createLogic({
  type: types.SERVER_DELETE,
  latest: true,
  async process({ getState, action, api }, dispatch, done) {
    const { account, project } = getProject(getState());
    const createParams = id => ({ urlParams: { account, project, id } });
    const servers = action.payload;
    try {
      await Promise.all(
        servers.map(
          server => api.projects.servers.terminate(null, createParams(server.id)),
        ),
      );
      servers.forEach((server) => {
        dispatch(resourceActions.deleteResource(server.id));
        dispatch(entityActions.deleteEntity({
          id: server.id,
          entityType: resourceSchema._key, // eslint-disable-line no-underscore-dangle
        }));
      });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    done();
  },
});

export default [
  serverStartLogic,
  serverStopLogic,
  serverDeleteLogic,
];
