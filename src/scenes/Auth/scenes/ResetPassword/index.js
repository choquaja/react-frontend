import React, { PropTypes } from 'react';

export default function ResetPassword(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

ResetPassword.defaultProps = {

};

ResetPassword.propTypes = {
  match: PropTypes.object.isRequired,
};
