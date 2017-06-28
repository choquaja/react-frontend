import { createLogic } from 'redux-logic';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { projectSchema } from '../../../../../../services/api/schema';
import { types } from './constants';

export const deleteProjectLogic = createLogic({
  type: types.DELETE_PROJECT,
  latest: true,
  async process({ getState, action, api, history, extract }, dispatch, done) {
    const { account, id } = extract.state.project(getState());
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const urlParams = { account, id };
    try {
      await api.projects.delete(null, { urlParams });
      dispatch(entityActions.deleteEntity(projectSchema._key, id)); // eslint-disable-line
      resolve();
      history.push('/');
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

export default [
  deleteProjectLogic,
];
