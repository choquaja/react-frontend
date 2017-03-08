import React from 'react';
import styled from 'styled-components';
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

const TableToolbar = styled.div`
  font-size: 18px;
  float: right;
  margin-bottom: 10px;
`;

const iconStyles = `
  margin-right: 5px;
  margin-left: 5px;
`;

const IconPlay = styled(Material.MdPlayArrow)`${iconStyles}`;
const IconPause = styled(Material.MdPause)`${iconStyles}`;
const IconDelete = styled(Material.MdDeleteForever)`${iconStyles}`;
const IconAdd = styled(Material.MdAddCircleOutline)`${iconStyles}`;

const clickStateReducer = selected => ({ selectedResources: previousResources }) => {
  const resourcePresent = previousResources.map(v => v.id).includes(selected.id)
  const selectedResources = resourcePresent
    ? previousResources.filter(resource => resource.id !== selected.id)
    : [...previousResources, selected]
  return { selectedResources };
}

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
    this.setState(clickStateReducer(selected))
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
    // const { userName, projectId } = this.props.match.params;
    let tabPane = null;
    if (this.state.selectedResources.length === 1) {
      console.log('tabPane', this.state)
      const resourceSelected = this.state.data.find(resource => resource.get('id') === this.state.selectedResources[0].id)
      console.log('tabPane', resourceSelected)
      tabPane = <TabPane resourceSelected={resourceSelected}/>
    }
    return (
      <div>
        <TableToolbar>
          <IconPlay/>
          <IconPause/>
          <IconDelete onClick={this.onDelete}/>
          <Link to="resources/new">
            <IconAdd/>
          </Link>
        </TableToolbar>
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
