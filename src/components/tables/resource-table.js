import React from 'react';
import Table from 'rc-table';

class ResourceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: 'name', className: 'name' },
        { title: 'Status', dataIndex: 'status', key: 'status', className: 'status' },
        { title: 'Type', dataIndex: 'type', key: 'type', className: 'type' },
        { title: 'Resources', dataIndex: 'resources', key: 'resources', className: 'resources' },
      ],
    };
  }

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default ResourceTable;
