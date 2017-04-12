import styled, { css } from 'styled-components';
import { themeDefaultColumns } from '../../services/theme';

const round = (number, places = 2) => Math.round(number * (10 ** places)) / (10 ** places);
const getSize = props => props.size;
const getWidth = props => round((getSize(props) / themeDefaultColumns(props)) * 100, 2);
const setWidth = props => css`
  width: calc(${getWidth(props)}% - 20px);
`;
const getFlex = props => props.flex || '1 1 auto';
const setFlex = props => css`
  flex: ${getFlex(props)};
`;
const handleSizing = (props) => {
  if (props.size) return setWidth(props);
  return setFlex(props);
};

const Column = styled.div`
  ${handleSizing}
  margin: 0 10px;
  padding: 0 10px;
  position: relative;
`;

export default Column;
