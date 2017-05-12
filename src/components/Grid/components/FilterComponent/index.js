import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../../FormInput';

export default class FilterComponent extends Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <FormInput type="text" name="filter" placeholder="Filter" onChange={this.handleChange} small />
    );
  }
}
