import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import darken from 'polished/lib/color/darken';
import timingFunctions from 'polished/lib/mixins/timingFunctions';
import { themeColor } from '../../services/theme';
import { groupedElement } from '../../services/theme/helpers';

const darkenColor = scale => color => darken(scale, color);
const darkenHover = darkenColor(0.12);
const darkenActive = darkenColor(0.24);

const createButtonVariant = bg => css`
  color: ${themeColor('white')};
  background-color: ${bg};
  border-color: ${bg};
  &:hover:not(:disabled) {
    background-color: ${darkenHover(bg)};
    border-color: ${darkenHover(bg)};
  }
  &:active:not(:disabled) {
    background-color: ${darkenActive(bg)};
    border-color: ${darkenActive(bg)};
  }
`;

const Button = styled.button`
  display: inline-block;
  ${props => props.block && css`display: block;`}
  ${props => props.full && css`width: 100%;`}
  background-color: ${themeColor('gray1')};
  border: 1px solid ${themeColor('gray3')};
  border-radius: 3px;
  color: ${themeColor('tertiary')};
  cursor: pointer;
  font-family: inherit;
  font-size: 1.6rem;
  height: 3.6rem;
  ${props => props.large && css`
    font-size: 1.9rem;
    height: 4.2rem;
  `}
  ${props => props.small && css`
    font-size: 1.2rem;
    height: 2.6rem;
  `}
  font-weight: 700;
  letter-spacing: normal;
  padding: .5em 1.25em;
  text-decoration: none;
  text-transform: none;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.2);
  ${props => props.flat && css`box-shadow: none;`}
  transition: all .15s ${timingFunctions('easeIn')};
  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${props => darkenHover(themeColor('gray2')(props))};
    border-color: ${props => darkenHover(themeColor('gray2')(props))};
  }
  &:disabled {
    cursor: default;
    opacity: .35;
  }
  ${props => props.grouped && groupedElement({ borderWidth: '1px', radiusWidth: '3px' })}
  ${props => props.primary && createButtonVariant(themeColor('primary')(props))}
  ${props => props.secondary && createButtonVariant(themeColor('secondary')(props))}
  ${props => props.success && createButtonVariant(themeColor('success')(props))}
  ${props => props.info && createButtonVariant(themeColor('info')(props))}
  ${props => props.warning && createButtonVariant(themeColor('warning')(props))}
  ${props => props.error && createButtonVariant(themeColor('error')(props))}
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  grouped: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
};

Button.defaultProps = {
  block: false,
  full: false,
  large: false,
  small: false,
  grouped: false,
  primary: false,
  secondary: false,
  success: false,
  info: false,
  warning: false,
  error: false,
};

export default Button;
