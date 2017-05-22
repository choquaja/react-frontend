import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import animation from 'polished/lib/shorthands/animation';
import sizeHelper from 'polished/lib/shorthands/size';
import logo from './images/logo-spinner.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(3600deg)
  }
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const sizeToRems = num => (`${num / 10}rem`);

const AnimatedImg = styled.img`
  opacity: 0;
  ${props => sizeHelper(sizeToRems(props.size))}
  ${animation(
    [spin, '4s', 'infinite', 'cubic-bezier(0.45, 0.02, 0.57, 0.99)'],
    [fadeIn, '.5s', 'ease-in'],
  )}
  animation-delay: .5s;
  animation-fill-mode: none, forwards;
  transform-origin: center center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function LoadingIndicator({ size }) {
  return (
    <ImgWrapper>
      <AnimatedImg src={logo} size={size} />
    </ImgWrapper>
  );
}

LoadingIndicator.propTypes = {
  size: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  size: 60,
};
