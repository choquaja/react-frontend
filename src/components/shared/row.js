import styled from 'styled-components';

const getJustify = props => props.justify || 'initial';
const getAlign = props => props.align || 'initial';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${getJustify};
  align-items: ${getAlign};
`;

export default Row;
