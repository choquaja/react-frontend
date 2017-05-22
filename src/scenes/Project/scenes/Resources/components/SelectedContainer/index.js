import { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    selected: [],
  }

  handleSelected = (selectedData) => {
    const selected = (!Array.isArray(selectedData) ? [selectedData] : selectedData);
    return this.setState({ selected });
  }

  render() {
    // console.log('SelectedContainer render', this.state);
    return this.props.children({ ...this.state, handleSelected: this.handleSelected });
  }
}

export default SelectedContainer;
