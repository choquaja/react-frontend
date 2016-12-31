import React from 'react';
import Table from 'rc-table';
import * as Material from 'react-icons/lib/md';

class Collaborators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: 'name', className: 'name' },
        { title: 'Role', dataIndex: 'role', key: 'role', className: 'role' }
      ],
      data: []
    };
  }

  render() {
    return (
      <div>
        <div className="table-toolbar">
          <Material.MdAddCircleOutline/>
        </div>
        <Table
          columns={this.state.columns}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Collaborators;
