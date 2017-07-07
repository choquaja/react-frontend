import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DropdownMenu from 'react-dd-menu';
import { themeColor } from '../../services/theme';

const SIZES = [
  ['sm', '150px'],
  ['md', '300px'],
  ['lg', '450px'],
  ['xl', '600px'],
];
const ddNestedPosition = (dir, padding) => {
  if (dir !== 'center') {
    const swapped = (dir === 'left' ? 'right' : 'left');
    return css`
      [class^='nested-']:not(.nested-reverse) > span {
        ${swapped}: 100%;
        padding-${swapped}: ${padding};
      }
      .nested-reverse > span {
        ${dir}: 100%;
        padding-${dir}: ${padding};
      }
    `;
  }
  return '';
};
const ddPosition = dir => css`
  &.dd-menu-${dir} .dd-menu-items {
    ${dir}: 0;
    ${ddNestedPosition(dir, '.5em')};
  }
`;
const ddSize = (size, width) => css`
  &.dd-menu-${size} .dd-menu-items {
    width: ${width};
  }
`;

const DropdownComponent = styled(DropdownMenu)`
display: inline-block;
position: relative;

&.dd-menu-center .dd-menu-items {
  left: 50%;
  transform: translateX(-50%);
}
${ddPosition('left')}
${ddPosition('right')}
${SIZES.map(args => ddSize(...args).join('')).join('')}
.dd-menu-items {
  position: absolute;
  z-index: 7;
  margin: .5em 0 0 0;

  &.dd-items-upwards {
    bottom: 100%;
    margin: 0 0 .5em;
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: ${themeColor('white')};
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.2);

    &.dd-items-right li > * {
      text-align: right;
    }
    &.dd-items-left li > * {
      text-align: left;
    }
    &.dd-items-center li > * {
      text-align: center;
    }
    li {
      white-space: nowrap;

      > button {
        border: none;
        background: transparent;
      }
    }
  }
}

.dd-items-upwards {
  li.nested-dd-menu > span {
    bottom: 0;
    top: initial;
  }
}
li.nested-dd-menu {
  position: relative;

  > span {
    position: absolute;
    top: 0;
  }
}
`;

const toggleOpen = state => ({ open: !state.open });
export class DropdownContainer extends Component {
  state = {
    open: false,
  }
  handleClick = () => this.setState(toggleOpen)
  render() {
    const { handleClick, state, props: { children } } = this;
    return children({ handleClick, ...state });
  }
}

DropdownContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default function Dropdown(props) {
  const { children, toggle, ...rest } = props;
  return (
    <DropdownContainer>
      {({ handleClick, open }) => (
        <DropdownComponent
          isOpen={open}
          close={handleClick}
          toggle={toggle({ handleClick, open })}
          {...rest}
        >
          {children}
        </DropdownComponent>
      )}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
};
