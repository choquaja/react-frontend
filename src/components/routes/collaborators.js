import React from 'react';
import ReactDOM from 'react-dom';
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

  onAddCollabClick(event, target) {
    const element = ReactDOM.findDOMNode(event.target);
    console.log(element);
    const form = element.closest(".form-inline"); 
    console.log(form);
  } 

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          data={this.state.data}
        />
        <form className="form-inline add-collaborators">
          <input type="text" id="collaborator"/>
          <button type="submit">
            <Material.MdGroupAdd/>
            Add Collaborator
          </button>
        </form>
      </div>
    );
  }
}

export default Collaborators;
