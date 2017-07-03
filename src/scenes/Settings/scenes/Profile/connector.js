import get from 'lodash/get';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: get(state, 'data.user.data'),
});

export default connect(mapStateToProps);
