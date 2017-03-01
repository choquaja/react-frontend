import React from 'react';
import Table from '../tables/table';
import * as Material from 'react-icons/lib/md';
import TabPane from '../tab-pane/tab-pane';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteResources,
  startResources,
  stopResources,
} from '../../actions';

export class Resources extends React.Component {
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
      selectedResources: [],
    };
  }

  onRowClick(selected) {
    this.state.selectedResources.filter((resource) => {
      return resource.id !== selected.id;
    });
    this.state.selectedResources.push(selected);
  }

  onDelete(event) {
    this.props.onDelete(this.state.selectedResources);
  }

  onStart(event) {
    this.props.onStart(this.state.selectedResources);
  }

  onStop(event) {
    this.props.onStop(this.state.selectedResources);
  }

  render() {
    const { userName, projectId } = this.props.match.params;
    let tabPane = null;
    if (this.state.resourceSelected) {
      tabPane = <TabPane resourceSelected={this.state.resourceSelected}/>
    }
    return (
      <div>
        <div className="table-toolbar">
          <Material.MdPlayArrow/>
          <Material.MdPause/>
          <Material.MdDeleteForever onClick={this.onDelete}/>
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

const mapDispatchToProps = (dispatch) => ({
  onDelete: (resources) => {
    dispatch(deleteResources(resources));
  },
  onStart: (resources) => {
    dispatch(startResources(resources));
  },
  onStop: (resources) => {
    dispatch(stopResources(resources));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
