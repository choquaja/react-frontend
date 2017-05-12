import PropTypes from 'prop-types';
import React from 'react';

export default function SSHKeys(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

SSHKeys.defaultProps = {

};

SSHKeys.propTypes = {
  match: PropTypes.object.isRequired,
};
