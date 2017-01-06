import React from 'react';
import Table from '../tables/table';
import * as Material from 'react-icons/lib/md';
import TabPane from '../tab-pane/tab-pane';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);
    
    this.onRowClick = this.onRowClick.bind(this);

    const { workspaces, models, jobs } = props;
    const data = workspaces.concat(models, jobs);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: ['name'], className: 'name' },
        { title: 'Status', dataIndex: 'status', key: ['status'], className: 'status' },
        { title: 'Type', dataIndex: 'type', key: ['type'], className: 'type' },
        { title: 'Memory', dataIndex: 'memory', key: ['resourcesId', 'memory'], className: 'memory' },
        { title: 'CPUs', dataIndex: 'cpus', key: ['resourcesId', 'cpu'], className: 'cpus' },
        { title: 'Engine', dataIndex: 'engine', key: ['engine'], className: 'engine' },
      ],
      data: data,
    };
  }

  onRowClick(selected) {
    this.setState({
      resourceSelected: this.state.data.get(selected),
    });
  }

  render() {
    const { userName, projectId } = this.props.params;
    let tabPane = null;
    if (this.state.resourceSelected) {
      tabPane = <TabPane resourceSelected={this.state.resourceSelected}/>
    }
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
          data={this.state.data}
          onRowClick={this.onRowClick}
        />
        {tabPane}
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
