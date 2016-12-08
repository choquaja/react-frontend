import Table from 'rc-table';
import React from 'react';

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

  render() {
    return (
      <Table
        columns={this.state.columns}
        data={this.props.data}
      />
            
    );
  }
}

export default FileViewer;
