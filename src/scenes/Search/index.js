import PropTypes from 'prop-types';
import React from 'react';

export default function Search(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Search.defaultProps = {

};

Search.propTypes = {
  match: PropTypes.object.isRequired,
};
