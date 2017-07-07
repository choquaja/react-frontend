import { bindActionCreators, compose } from 'redux';
import get from 'lodash/get';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { actions } from './constants';
import withLoader from '../../../../components/withLoader';

const mapStateToProps = state => ({
  user: get(state, 'data.user.data.id'),
  data: get(state, 'scenes.settings.apikey.data'),
  loading: get(state, 'scenes.settings.apikey.loading'),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { user } = this.props;
      this.props.actions.getApiKeyRequest({ user });
    },
  }),
  withLoader({
    condition: props => props.loading && !props.data,
    size: 128,
  }),
);
