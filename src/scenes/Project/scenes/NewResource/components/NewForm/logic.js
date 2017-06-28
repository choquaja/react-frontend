import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { environmentResourcesSchema } from '../../../../../../services/api/schema';

export const getFieldDataLogic = createLogic({
  type: types.GET_FIELD_DATA_REQUEST,
  latest: true,
  async process({ getState, api, extract }, dispatch, done) {
    const { account } = extract.state.project(getState());
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
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { account, project, name } = extract.state.project(getState());
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
