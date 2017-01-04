import React from 'react';
import Table from '../tables/table';
import * as Material from 'react-icons/lib/md';
import  { Tabs, Tab } from 'react-bootstrap-tabs';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: ['name'], className: 'name' },
        { title: 'Status', dataIndex: 'status', key: ['status'], className: 'status' },
        { title: 'Type', dataIndex: 'type', key: ['type'], className: 'type' },
        { title: 'Memory', dataIndex: 'memory', key: ['resourcesId', 'memory'], className: 'memory' },
        { title: 'CPUs', dataIndex: 'cpus', key: ['resourcesId', 'cpu'], className: 'cpus' },
        { title: 'Engine', dataIndex: 'engine', key: ['engine'], className: 'engine' },
      ],
    };
  }

  onRowClick() {
    this.setState({
      resourceSelected: {},
    });
  }

  render() {
    const { userName, projectId } = this.props.params;
    const { workspaces, models, jobs } = this.props;
    const data = workspaces.concat(models, jobs);
    let tabPane = null;
    if (this.state.resourceSelected) {
      tabPane = (
        <Tabs className="resources-info">
          <Tab label="General">General</Tab>
          <Tab label="Environment Variables">Environment Variables</Tab>
          <Tab label="SSH Keys">SSH Keys</Tab>
          <Tab label="Activity">Activity</Tab>
          <Tab label="Logs">Logs</Tab>
        </Tabs>
      );
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
          data={data}
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
