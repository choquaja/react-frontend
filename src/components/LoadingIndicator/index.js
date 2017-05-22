import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import animation from 'polished/lib/shorthands/animation';
import sizeHelper from 'polished/lib/shorthands/size';
import logo from './images/mark.svg';

const loadingAnim = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(3600deg)
  }
`;

const sizeToRems = num => (`${num / 10}rem`);
// const getSizeArray = num => ([sizeToRems(num), sizeToRems(num)]);

const AnimatedImg = styled.img`
  ${props => sizeHelper(sizeToRems(props.size))}
  ${animation([loadingAnim, '70s', 'infinite', 'cubic-bezier(0.45, 0.02, 0.57, 0.99);'])}
`;


export default function LoadingIndicator({ size }) {
  return (
    <div>
      <AnimatedImg src={logo} size={size} />
    </div>
  );
}

LoadingIndicator.propTypes = {
  size: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  size: 60,
};
