import { Component } from 'react';
import PropTypes from 'prop-types';

export default class DropzoneContainer extends Component {
  state = {
    accepted: [],
    rejected: [],
  }

  handleDrop = (accepted, rejected) => this.setState({ accepted, rejected })

  render = () => this.props.children({ handleDrop: this.handleDrop, ...this.state })
}

DropzoneContainer.propTypes = {
  children: PropTypes.func.isRequired,
};
