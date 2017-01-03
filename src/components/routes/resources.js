import React from 'react';
import Table from 'rc-table';
import * as Material from 'react-icons/lib/md';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Workspaces extends React.Component {
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
    const { userName, projectId } = this.props.params;
    const { workspaces, models, jobs } = this.props;
    const data = workspaces.concat(models, jobs);
    return (
      <div>
        <div className="table-toolbar">
          <Material.MdPlayArrow/>
          <Material.MdPause/>
          <Material.MdDeleteForever/>
          <Link to={`${userName}/projects/${projectId}/resources/new`}>
            <Material.MdAddCircleOutline/>
          </Link>
        </div>
        <Table
          columns={this.state.columns}
          data={data.toJS()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workspaces: state.workspaces,
  models: state.models,
  jobs: state.jobs,
});

export default connect(mapStateToProps)(Workspaces);
