import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { fileSchema } from '../../../../../../services/api/schema';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { addLogic } from '../../../../../../services/store';

export const getFileLogic = createLogic({
  type: types.GET_FILE_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project, id } = action.payload;
    const urlParams = { account, project, id };
    const params = { content: true };
    try {
      const response = await api.projects.files.get(null, { urlParams, params });
      const normalized = normalize(response.data, fileSchema);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getFileSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getFileFail(error));
    }
    done();
  },
});

export const saveFileLogic = createLogic({
  type: types.SAVE_FILE,
  latest: true,
  async process({ getState, action, api, extract, history }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { account, project } = extract.state.project(getState());
    const { id, ...values } = action.payload;
    const urlParams = { account, project, id };
    const form = new FormData();
    form.append('name', values.name);
    form.append('base64_data', values.base64_data);
    try {
      const response = await api.projects.files[id ? 'update' : 'create'](form, { urlParams });
      resolve();
      if (!id) history.push(`edit/${response.data[0].id}`);
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  getFileLogic,
  saveFileLogic,
]);
