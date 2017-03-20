import React, { PropTypes } from 'react';

export default function Profile(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
