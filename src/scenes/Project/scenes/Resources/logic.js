import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../data/entities/constants';
import { resourceSchema } from '../../../../services/api/schema';

export const getServersLogic = createLogic({
  type: types.GET_SERVERS_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project } = action.payload;
    const urlParams = { account, project };
    try {
      const response = await api.projects.servers.list(null, { urlParams });
      const normalized = normalize(response.data, [resourceSchema]);
      // console.log('---------------------------------------');
      // console.log('response.data:', response.data);
      // console.log('normalized:', normalized);
      // console.log('---------------------------------------');
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getServersSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getServersFail(error));
    }
    done();
  },
});

export default [
  getServersLogic,
];
