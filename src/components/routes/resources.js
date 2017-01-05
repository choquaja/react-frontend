import React from 'react';
import Table from '../tables/table';
import * as Material from 'react-icons/lib/md';
import  { Tabs, Tab } from 'react-bootstrap-tabs';
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
      tabPane = (
        <Tabs className="resources-info">
          <Tab label="General">
            <form>
              <div className="form-group">
                <label htmlFor="resourceName">Resource Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  placeholder={this.state.resourceSelected.get('name')}/>
              </div>
            </form>
          </Tab>
          <Tab label="Environment Variables">
            <table>
              <tbody>
                <tr>
                  <th>Variable Name</th>
                  <th>Variable Value</th>
                </tr>
                {
                  this.state.resourceSelected.get('envVars').entrySeq().map((pair) => {
                    return (
                      <tr>
                        <td>{pair[0]}</td>
                        <td>{pair[1]}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </Tab>
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
