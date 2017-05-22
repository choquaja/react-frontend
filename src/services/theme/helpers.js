import { css } from 'styled-components';
import borderRadius from 'polished/lib/shorthands/borderRadius';
import placeholder from 'polished/lib/mixins/placeholder';

export const groupedElement = ({ borderWidth, radiusWidth }) => css`
  box-shadow: none;
  border-radius: 0;
  border-left-width: 0;
  border-right-width: 0;
  &:first-child {
    border-left-width: ${borderWidth};
    ${borderRadius('left', radiusWidth)}
  }
  &:last-child {
    border-right-width: ${borderWidth};
    ${borderRadius('right', radiusWidth)}
  }
`;

export const formElementStyles = css`
  display: inline-block;
  ${props => props.block && css`display: block;`}
  width: 30rem;
  ${props => props.full && css`width: 100%;`}
  color: #333;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  padding: .7em 1.4em;
  ${props => props.large && css`
    font-size: 1.9rem;
    height: 4.2rem;
  `}
  ${props => props.small && css`
    font-size: 1.3rem;
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
