import { bindActionCreators, compose } from 'redux';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { actions } from './constants';
import withLoader from '../../components/withLoader';

const mapStateToProps = state => ({
  data: state.scenes.profile.data,
  loading: state.scenes.profile.loading,
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { userName: account } = this.props.match.params;
      this.props.actions.getProfileRequest({ account });
    },
    componentWillReceiveProps(props) {
      if (this.props.match.params.userName !== props.match.params.userName) {
        const { userName: account } = props.match.params;
        this.props.actions.getProfileRequest({ account });
      }
    },
    componentWillUnmount() {
      this.props.actions.resetProfile();
    },
  }),
  withLoader({
    condition: props => props.loading,
    size: 256,
  }),
);
