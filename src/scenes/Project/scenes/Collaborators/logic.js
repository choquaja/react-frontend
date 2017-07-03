import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { types, actions } from './constants';
import { actions as entityActions } from '../../../../data/entities/constants';
import { collaboratorSchema } from '../../../../services/api/schema';
import { addLogic } from '../../../../services/store';

export const getCollaboratorsLogic = createLogic({
  type: types.GET_COLLABORATORS_REQUEST,
  latest: true,
  async process({ action, api }, dispatch, done) {
    const { account, project } = action.payload;
    const urlParams = { account, project };
    try {
      const response = await api.projects.collaborators.list(null, { urlParams });
      const normalized = normalize(response.data, [collaboratorSchema]);
      dispatch(entityActions.updateEntities(normalized.entities));
      dispatch(actions.getCollaboratorsSuccess(normalized.result));
    } catch (error) {
      dispatch(actions.getCollaboratorsFail(error));
    }
    done();
  },
});

addLogic([
  getCollaboratorsLogic,
]);
