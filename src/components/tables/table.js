import React from 'react';

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
                <tr key={index} id={index} onClick={this.onClick}>
                  {
                    columns.map((column) => {
                      return <td
                              key={column.className}
                              onClick={this.onClick}>
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
