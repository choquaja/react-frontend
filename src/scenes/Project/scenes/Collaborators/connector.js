import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import get from 'lodash/get';
import { actions } from './constants';
import { projectSchema, collaboratorSchema } from '../../../../services/api/schema';

const dataSelector = createSelector(
  state => state.scenes.project.details.data,
  state => state.scenes.project.collaborators.data,
  state => state.scenes.project.collaborators.loading,
  state => state.data.entities,
  (projectId, collaboratorIds, loading, entities) => {
    const project = denormalize(projectId, projectSchema, entities);
    return {
      account: get(project, 'owner', ''),
      id: get(project, 'id', ''),
      data: denormalize(collaboratorIds, [collaboratorSchema], entities),
      loading,
    };
  },
);

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(dataSelector, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { account, id: project } = this.props;
      this.props.actions.getCollaboratorsRequest({ account, project });
    },
  }),
);
