import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../tables/table';
import { connect } from 'react-redux';
import * as Material from 'react-icons/lib/md';

class Collaborators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'First Name', dataIndex: 'firstName', key: ['firstName'], className: 'firstName' },
        { title: 'Last Name', dataIndex: 'lastName', key: ['lastName'], className: 'lastName' },
        { title: 'Role', dataIndex: 'role', key: 'role', className: 'role' }
      ],
    };
  }

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          data={this.props.collaborators}
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

const mapStateToProps = (state) => ({
  collaborators: state.collaborators,
});

export default connect(mapStateToProps)(Collaborators);
