import PropTypes from 'prop-types';
import React from 'react';

export default function Settings(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Settings.defaultProps = {

};

Settings.propTypes = {
  match: PropTypes.object.isRequired,
};
