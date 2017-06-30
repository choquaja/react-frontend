import { bindActionCreators, compose } from 'redux';
import get from 'lodash/get';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { actions } from './constants';
import withLoader from '../../../../components/withLoader';

const mapStateToProps = state => ({
  user: get(state, 'data.user.data.id'),
  account: get(state, 'data.user.data.username'),
  data: get(state, 'scenes.account.sshkeys.data'),
  loading: get(state, 'scenes.account.sshkeys.loading'),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { account, user } = this.props;
      if (!user) return;
      this.props.actions.getSshkeysRequest({ account, user });
    },
  }),
  withLoader({
    condition: props => props.loading && !props.data,
    size: 128,
  }),
);
