import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(event, target, rowKey) {
    const currentlySelected = document.getElementsByClassName('selected');
    if (currentlySelected.length === 1) {
      currentlySelected.item(0).classList.toggle('selected');
    }
    const row = event.target.parentNode;
    row.classList.add('selected');
    this.props.onRowClick(row.id);
  }

  render() {
    const { columns, data } = this.props;
    return (
      <table className="table">
        <tbody>
          <tr>
            {
              columns.map((column) => {
                return <th key={column.title}>{column.title}</th>;
              })
            }
          </tr>
          {
            data.map((datum, index) => {
              console.log(datum);
              return (
                <tr key={index} id={index} onClick={this.onRowClick}>
                  {
                    columns.map((column) => {
                      return <td
                              key={column.className}
                              onClick={this.onRowClick}>
                                {datum.getIn(column.key)}
                            </td>;
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
