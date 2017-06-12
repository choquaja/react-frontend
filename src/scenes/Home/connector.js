import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { actions } from './constants';
import { projectSchema } from '../../services/api/schema';
import withLoader from '../../components/withLoader';

const dataSelector = createSelector(
  state => state.scenes.home.data,
  state => state.scenes.home.loading,
  state => state.data.entities,
  (ids, loading, entities) => ({
    data: denormalize(ids, [projectSchema], entities),
    loading,
  }),
);

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(dataSelector, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.actions.getProjectsRequest();
    },
  }),
  withLoader({
    condition: props => props.loading && !props.data,
    size: 256,
  }),
);
