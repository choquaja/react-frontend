import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export function Overview(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

Overview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.scenes.project.settings.get('name'),
  description: state.scenes.project.settings.get('description'),
});

export default connect(mapStateToProps)(Overview);
