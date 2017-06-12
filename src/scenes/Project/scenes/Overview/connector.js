import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import get from 'lodash/get';
import { actions } from './constants';
import { projectSchema, fileSchema } from '../../../../services/api/schema';
import withLoader from '../../../../components/withLoader';

const dataSelector = createSelector(
  state => state.scenes.project.details.data,
  state => state.scenes.project.overview.data,
  state => state.scenes.project.overview.loading,
  state => state.data.entities,
  (projectId, readmeId, loading, entities) => {
    const project = denormalize(projectId, projectSchema, entities);
    return {
      account: get(project, 'owner', ''),
      id: get(project, 'id', ''),
      data: denormalize(readmeId, fileSchema, entities),
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
      this.props.actions.getReadmeRequest({ account, project });
    },
  }),
  withLoader({
    condition: props => props.loading && !props.data,
    size: 128,
  }),
);
