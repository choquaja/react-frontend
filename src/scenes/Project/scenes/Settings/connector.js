import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { actions } from '../../constants';
import { projectSchema } from '../../../../services/api/schema';
import withLoader from '../../../../components/withLoader';

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
      // const { account, id: project } = this.props;
      // const { fileId: id } = this.props.match.params;
      // this.props.actions.getProjectRequest({ account, project });
    },
  }),
  withLoader({
    condition: props => props.loading && !props.data,
    size: 128,
  }),
);
