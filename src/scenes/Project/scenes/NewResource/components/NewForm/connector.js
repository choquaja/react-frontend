import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { actions } from './constants';
import { environmentResourcesSchema } from '../../../../../../services/api/schema';
import withLoader from '../../../../../../components/withLoader';

const dataSelector = createSelector(
  state => state.scenes.project.newResource.newResourceForm.data,
  state => state.scenes.project.newResource.newResourceForm.loading,
  state => state.data.entities,
  (ids, loading, entities) => {
    const environmentResources = denormalize(ids, [environmentResourcesSchema], entities) || [];
    const sizeOptions = environmentResources.map(resource => ({
      value: resource.id,
      label: `${resource.name} (${resource.memory}MB)`,
    }));
    return {
      data: { sizeOptions },
      loading,
    };
  },
);

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(dataSelector, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.actions.getFieldDataRequest();
    },
  }),
  withLoader({
    condition: props => props.loading,
  }),
);
