import React, { PropTypes } from 'react';

export default function Home(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Home.defaultProps = {

};

Home.propTypes = {
  match: PropTypes.object.isRequired,
};
