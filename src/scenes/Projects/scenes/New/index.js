import PropTypes from 'prop-types';
import React from 'react';

export default function New(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

New.defaultProps = {

};

New.propTypes = {
  match: PropTypes.object.isRequired,
};
