import PropTypes from 'prop-types';
import React from 'react';

export default function Integrations(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Integrations.defaultProps = {

};

Integrations.propTypes = {
  match: PropTypes.object.isRequired,
};
