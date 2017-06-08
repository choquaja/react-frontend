import { connect } from 'react-redux';
import { actions } from './constants';

const mapDispatchToProps = dispatch => ({
  actions: {
    serverStart: selected => () => dispatch(actions.serverStart(selected)),
    serverStop: selected => () => dispatch(actions.serverStop(selected)),
    serverDelete: selected => () => dispatch(actions.serverDelete(selected)),
  },
});

export default connect(null, mapDispatchToProps);
