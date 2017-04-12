import { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import placeholder from 'polished/lib/mixins/placeholder';

const TextInput = styled.input`
  display: inline-block;
  ${props => props.block && css`display: block;`}
  color: #333;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  padding: .7em 1.4em;
  height: 3.6rem;
  ${props => props.large && css`
    font-size: 1.9rem;
    height: 4.2rem;
  `}
  ${props => props.small && css`
    font-size: 1.2rem;
    height: 2.6rem;
  `}
  &:disabled {
    cursor: default;
    background: #e2e2e2;
    opacity: .4;
  }
  ${placeholder(css`
    color: #808080;
    font-style: italic;
  `)}
`;

TextInput.propTypes = {
  block: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

TextInput.defaultProps = {
  block: false,
  large: false,
  small: false,
};

export default TextInput;
