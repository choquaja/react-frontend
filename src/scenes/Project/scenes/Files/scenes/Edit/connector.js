import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import get from 'lodash/get';
import { actions } from './constants';
import { projectSchema, fileSchema } from '../../../../../../services/api/schema';
import withLoader from '../../../../../../components/withLoader';

const dataSelector = createSelector(
  state => state.scenes.project.details.data,
  state => state.scenes.project.files.edit.data,
  state => state.scenes.project.files.edit.loading,
  state => state.data.entities,
  (projectId, fileId, loading, entities) => {
    const project = denormalize(projectId, projectSchema, entities);
    return {
      account: get(project, 'owner', ''),
      id: get(project, 'id', ''),
      data: denormalize(fileId, fileSchema, entities),
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
      const { fileId: id } = this.props.match.params;
      if (!id) return;
      this.props.actions.getFileRequest({ account, project, id });
    },
    componentWillUnmount() {
      this.props.actions.resetReducer();
    },
  }),
  withLoader({
    condition: props => props.loading && props.match.params.fileId && !get(props, 'data.content'),
    size: 128,
  }),
);
