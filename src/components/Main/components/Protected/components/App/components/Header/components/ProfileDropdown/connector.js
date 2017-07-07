import { connect } from 'react-redux';
import get from 'lodash/fp/get';

const mapStateToProps = state => ({
  avatar: get('data.user.data.profile.avatar_url')(state),
  username: get('data.user.data.username')(state),
});

export default connect(mapStateToProps, null);
