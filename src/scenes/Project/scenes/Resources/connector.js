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
  (projectId, resourceIds, loading, selectedList, entities) => {
    const project = denormalize(projectId, projectSchema, entities);
    const servers = denormalize(resourceIds, [resourceSchema], entities) || [];
    const selectedIds = selectedList.map(x => x.id);
    const selected = servers.filter(x => selectedIds.includes(x.id));
    return {
      account: get(project, 'owner', ''),
      id: get(project, 'id', ''),
      data: servers.filter(Boolean),
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
