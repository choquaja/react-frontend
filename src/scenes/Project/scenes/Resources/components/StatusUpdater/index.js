import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as entityActions } from '../../../../../../data/entities/constants';
import { resourceSchema } from '../../../../../../services/api/schema';

class StatusUpdater extends Component {
  componentDidMount = () => {
    try {
      this.socket = new window.WebSocket(this.props.server.status_url);
      this.socket.addEventListener('message', (event) => {
        const { status } = JSON.parse(event.data);
        this.props.updateStatus(status);
      });
    } catch (err) {
      // Do nothing eslint-disable-line
    }
  }

  componentWillUnmount = () => {
    if (this.socket) this.socket.close();
  }

  render() {
    return null;
  }
}

StatusUpdater.propTypes = {
  updateStatus: PropTypes.func.isRequired,
  server: PropTypes.object.isRequired,
};

export default connect(
  null,
  (dispatch, props) => ({
    updateStatus(status) {
      dispatch(entityActions.updateEntity({
        entityType: resourceSchema._key, // eslint-disable-line no-underscore-dangle
        id: props.server.id,
        data: { status },
      }));
    },
  }),
)(StatusUpdater);
