import { createLogic } from 'redux-logic';
import { types, actions } from './constants';
import { addLogic } from '../../services/store';

export const getProfileLogic = createLogic({
  type: types.GET_PROFILE_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account } = action.payload;
    try {
      const [userResponse, projectsRespone] = await Promise.all([
        api.users.list(null, { params: { username: account } }),
        api.projects.list(null, { urlParams: { account } }),
      ]);
      const results = {
        user: userResponse.data[0],
        projects: projectsRespone.data,
      };
      dispatch(actions.getProfileSuccess(results));
    } catch (error) {
      dispatch(actions.getProfileFail(error));
    }
    done();
  },
});

addLogic([
  getProfileLogic,
]);
