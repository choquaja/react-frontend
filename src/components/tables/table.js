import React from 'react';
import styled, { css } from 'styled-components';
import { getThemeColor } from '../styles';

const commonStyles = css`
  border-top: 1px solid ${getThemeColor('silverGray')};
  border-bottom: 1px solid ${getThemeColor('silverGray')};
`;

const TabelEl = styled.table`
  border-collapse: collapse;
  width: 100%;
  ${commonStyles}
`;

const Tr = styled.tr`
  line-height: 30px;
  &[class~="selected"] {
    background-color: ${getThemeColor('primaryLight')};
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
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event, rowKey) {
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
              columns.map((column) => {
                return <Th key={column.title}>{column.title}</Th>;
              })
            }
          </Tr>
          {
            data.map((datum, index) => {
              return (
                <Tr key={index} id={index} onClick={this.onClick}>
                  {
                    columns.map((column) => {
                      return <Td
                              key={column.className}>
                                {datum.getIn(column.key)}
                            </Td>;
                    })
                  }
                </Tr>
              );
            })
          }
        </tbody>
      </TabelEl>
    );
  }
}

export default Table;
