import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { actions } from '../../../../data/user/constants';
import withLoader from '../../../../components/withLoader';

const mapStateToProps = state => ({
  loading: state.data.user.loading,
  data: state.data.user.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.actions.getUserRequest();
    },
    componentWillUnmount() {
      this.props.actions.resetUser();
    },
  }),
  withLoader({
    condition: props => props.loading || !props.data,
    size: 256,
  }),
);
