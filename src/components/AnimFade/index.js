import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-motion-ui-pack';

const enterState = { opacity: 1 };
const leaveState = { opacity: 0 };

export default function AnimFade(props) {
  return <Transition component="div" enter={enterState} leave={leaveState} {...props} />;
}

AnimFade.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
