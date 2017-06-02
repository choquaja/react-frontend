import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StatusCellComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.value,
    };
    try {
      this.socket = new window.WebSocket(this.props.statusUrl);
    } catch (err) {
      // Do nothing eslint-disable-line
    }
  }

  componentDidMount = () => {
    if (this.socket) {
      this.socket.addEventListener('message', (event) => {
        const { status } = JSON.parse(event.data);
        this.setState({ status });
      });
    }
  }

  componentWillUnmount = () => {
    if (this.socket) this.socket.close();
  }

  render() {
    return (
      <span>{this.state.status}</span>
    );
  }
}

StatusCellComponent.propTypes = {
  value: PropTypes.any.isRequired,
  statusUrl: PropTypes.string.isRequired,
};

const StatusCell = connect(
  (state, props) => {
    const selectorProps = { griddleKey: props.griddleKey, columnId: 'status_url' };
    const statusUrl = props.selectors.cellValueSelector(state, selectorProps);
    return { statusUrl };
  },
)(StatusCellComponent);

export default StatusCell;
