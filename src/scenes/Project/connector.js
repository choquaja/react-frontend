import { bindActionCreators } from 'redux';
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

export default connect(dataSelector, mapDispatchToProps);
