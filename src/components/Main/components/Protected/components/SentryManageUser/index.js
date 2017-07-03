import { Component } from 'react';
import PropTypes from 'prop-types';

export default class SentryManageUser extends Component {
  componentDidMount = () => {
    console.log(this.props);
    if (window.Raven && window.Raven.setUserContext) {
      window.Raven.setUserContext({
        id: this.props.user.id,
        email: this.props.user.email,
        username: this.props.user.username,
      });
    }
  }

  componentWillUnmount = () => {
    if (window.Raven && window.Raven.setUserContext) {
      window.Raven.setUserContext();
    }
  }

  render() {
    return null;
  }
}

SentryManageUser.propTypes = {
  user: PropTypes.object.isRequired,
};
