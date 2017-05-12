import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MdArrowDropDown } from 'react-icons/lib/md';

const OpenIndicatorContainer = styled.div`
  width: 2.4rem;
  text-align: center;
`;

const OpenArrow = styled(MdArrowDropDown)`
  transition: transform .1s ease-in-out;
  transform: rotate(-90deg);
  ${props => props.open && css`
    transform: rotate(0deg);
  `}
`;

export default function OpenIndicator({ open, empty, onClick }) {
  return (
    <OpenIndicatorContainer onClick={onClick}>
      {empty ? ' ' : <OpenArrow open={open} size={20} />}
    </OpenIndicatorContainer>
  );
}

OpenIndicator.defaultProps = {
  open: false,
  empty: false,
  onClick: () => {},
};

OpenIndicator.propTypes = {
  open: PropTypes.bool,
  empty: PropTypes.bool,
  onClick: PropTypes.func,
};
