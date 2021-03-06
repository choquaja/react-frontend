import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { themeColor } from '../../services/theme';

const commonStyles = css`
  border-top: 1px solid ${themeColor('silverGray')};
  border-bottom: 1px solid ${themeColor('silverGray')};
`;

const TabelEl = styled.table`
  border-collapse: collapse;
  width: 100%;
  ${commonStyles}
`;

const Tr = styled.tr`
  line-height: 30px;
  &[class~="selected"] {
    background-color: ${themeColor('primaryLight')};
  }
`;

const Th = styled.th`
  ${commonStyles}
  font-weight: bold;
  font-size: 1.1em;
  text-align: left;
`;

const Td = styled.td`
  ${commonStyles}
`;

class Table extends React.Component {
  static propTypes = {
    onRowClick: PropTypes.func,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
  }

  static defaultProps = {
    onRowClick: () => {},
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const tagName = event.target.tagName;
    const parent = tagName === 'tr' ? event.target : event.target.parentNode;
    parent.classList.toggle('selected');
    this.props.onRowClick({
      id: parent.id,
      type: parent.getElementsByTagName('td')[2].textContent,
    });
  }

  render() {
    const { columns, data } = this.props;
    return (
      <TabelEl>
        <tbody>
          <Tr>
            {
              columns.map(column => <Th key={column.title}>{column.title}</Th>)
            }
          </Tr>
          {
            data.map((datum, index) => (
              <Tr key={datum} id={index} onClick={this.onClick}>
                {
                    columns.map(column => <Td
                      key={column.className}
                    >
                      {datum.getIn(column.key)}
                    </Td>)
                  }
              </Tr>
              ))
          }
        </tbody>
      </TabelEl>
    );
  }
}

export default Table;
