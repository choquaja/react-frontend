import { createLogic } from 'redux-logic';
import { types } from './constants';
import { addLogic } from '../../../../../../../../services/store';

export const uploadFileLogic = createLogic({
  type: types.UPLOAD_FILE,
  latest: true,
  async process({ getState, action, api, extract, history }, dispatch, done) {
    const resolve = extract.action.resolve(action);
    const reject = extract.action.reject(action);
    const { account, project } = extract.state.project(getState());
    const urlParams = { account, project };
    const form = new FormData();
    action.payload.files.map(file => form.append('files', file));
    form.append('path', action.payload.path || '');
    try {
      await api.projects.files.create(form, { urlParams });
      resolve();
      history.push('./');
    } catch (error) {
      reject(api.helpers.mapErrorResponseToReduxForm(error));
    }
    done();
  },
});

addLogic([
  uploadFileLogic,
]);
