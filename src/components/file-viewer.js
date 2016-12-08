import Table from 'rc-table';
import React from 'react';
import ReactDOM from 'react-dom';

class FileViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Size', dataIndex: 'size', key: 'size' },
        { title: 'Last Modified', dataIndex: 'lastModified', key: 'lastModified' },
      ]
    };
  }

  onRowClick(index, record, event) {
    const parentRow = ReactDOM.findDOMNode(event.target).parentNode;
    parentRow.classList.toggle('selected');
  }

  render() {
    return (
      <Table
        columns={this.state.columns}
        data={this.props.data}
        onRowClick={this.onRowClick}
      />
            
    );
  }
}

export default FileViewer;
