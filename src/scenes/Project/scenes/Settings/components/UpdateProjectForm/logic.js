import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { projectSchema } from '../../../../../../services/api/schema';
import { types } from './constants';
import { addLogic } from '../../../../../../services/store';

export const updateProjectLogic = createLogic({
  type: types.UPDATE_PROJECT,
  latest: true,
  async process({ getState, action, api, extract }, dispatch, done) {
    const { account, id } = extract.state.project(getState());
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const urlParams = { account, id };
    try {
      const response = await api.projects.update(action.payload, { urlParams });
      const normalized = normalize(response.data, projectSchema);
      dispatch(entityActions.updateEntities(normalized.entities));
      resolve();
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  updateProjectLogic,
]);
