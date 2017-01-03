import React from 'react';

class Table extends React.Component {
  render() {
    const { columns, data } = this.props;
    return (
      <table className="table">
        <tbody>
          <tr>
            {
              columns.map((column) => {
                return <th>{column.title}</th>;
              })
            }
          </tr>
          {
            data.map((datum) => {
              return (
                <tr>
                  {
                    columns.map((column) => {
                      return <td>{datum.getIn(column.key)}</td>;
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
