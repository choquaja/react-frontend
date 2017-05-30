import { createLogic } from 'redux-logic';
import jwtDecode from 'jwt-decode';
import { types, actions } from './constants';
import { getToken } from '../../services/authToken';

export const getProjectsLogic = createLogic({
  type: types.GET_PROJECTS_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { username } = jwtDecode(getToken());
    const urlParams = { account: username };
    try {
      const response = await api.projects.list(null, { urlParams });
      dispatch(actions.getProjectsSuccess(response.data));
    } catch (error) {
      dispatch(actions.getProjectsFail(error));
    }
    done();
  },
});

export default [
  getProjectsLogic,
];
