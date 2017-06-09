import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { actions } from './constants';
import { projectSchema } from '../../services/api/schema';

const dataSelector = createSelector(
  state => state.scenes.project.details.data,
  state => state.scenes.project.details.loading,
  state => state.data.entities,
  (id, loading, entities) => ({
    data: denormalize(id, projectSchema, entities),
    loading,
  }),
);

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(dataSelector, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { userName: account, projectName: project } = this.props.match.params;
      this.props.actions.getProjectRequest({ account, project });
    },
    componentWillUnmount() {
      this.props.actions.resetProject();
    },
  }),
);
