import React, { PropTypes } from 'react';

export default function Invite(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Invite.defaultProps = {

};

Invite.propTypes = {
  match: PropTypes.object.isRequired,
};
