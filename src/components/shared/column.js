import styled from 'styled-components';
import { themeDefaultColumns } from '../../services/theme';

const round = (number, places = 2) => Math.round(number * (10 ** places)) / (10 ** places);
const getSize = props => props.size || themeDefaultColumns(props);
const getWidth = props => round((getSize(props) / themeDefaultColumns(props)) * 100, 2);

const Column = styled.div`
  width: calc(${getWidth}% - 20px);
  margin: 0 10px;
  padding: 0 10px;
  position: relative;
`;

export default Column;
