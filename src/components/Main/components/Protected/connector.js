import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { actions } from '../../../../data/user/constants';

const mapStateToProps = state => ({ loading: state.data.user.loading });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

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
);
