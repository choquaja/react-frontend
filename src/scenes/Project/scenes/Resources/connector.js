import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import get from 'lodash/get';
import { actions } from './constants';
import { projectSchema, resourceSchema } from '../../../../services/api/schema';

const dataSelector = createSelector(
  state => state.scenes.project.details.data,
  state => state.scenes.project.resources.data,
  state => state.scenes.project.resources.loading,
  state => state.scenes.project.resources.selected,
  state => state.data.entities,
  (projectId, resourceIds, loading, selected, entities) => {
    const project = denormalize(projectId, projectSchema, entities);
    return {
      account: get(project, 'owner', ''),
      id: get(project, 'id', ''),
      data: denormalize(resourceIds, [resourceSchema], entities),
      loading,
      selected,
    };
  },
);

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(dataSelector, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { account, id: project } = this.props;
      this.props.actions.getServersRequest({ account, project });
    },
    componentWillUnmount() {},
  }),
);
