import React, { PropTypes } from 'react';

export default function Login(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Login.defaultProps = {

};

Login.propTypes = {
  match: PropTypes.object.isRequired,
};
