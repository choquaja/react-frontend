import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';
import Table from '../../../../components/Table';
import TabPane from '../../../../components/TabPane';
import {
  deleteResources,
  startResources,
  stopResources,
} from './actions';

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
  const resourcePresent = previousResources.map(v => v.id).includes(selected.id);
  const selectedResources = resourcePresent
    ? previousResources.filter(resource => resource.id !== selected.id)
    : [...previousResources, selected];
  return { selectedResources };
};

export class Resources extends React.Component {
  static propTypes = {
    resources: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onStart: PropTypes.func,
    onStop: PropTypes.func,
  }

  static defaultProps = {
    onDelete: () => {},
    onStart: () => {},
    onStop: () => {},
  }

  constructor(props) {
    super(props);

    this.onRowClick = this.onRowClick.bind(this);

    const { resources } = props;
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: ['name'], className: 'name' },
        { title: 'Status', dataIndex: 'status', key: ['status'], className: 'status' },
        { title: 'Type', dataIndex: 'type', key: ['type'], className: 'type' },
        { title: 'Memory', dataIndex: 'memory', key: ['resourcesId', 'memory'], className: 'memory' },
        { title: 'CPUs', dataIndex: 'cpus', key: ['resourcesId', 'cpu'], className: 'cpus' },
        { title: 'Engine', dataIndex: 'engine', key: ['engine'], className: 'engine' },
      ],
      data: resources,
      selectedResources: [],
    };
  }

  onRowClick(selected) {
    this.setState(clickStateReducer(selected));
  }

  onDelete() {
    this.props.onDelete(this.state.selectedResources);
  }

  onStart() {
    this.props.onStart(this.state.selectedResources);
  }

  onStop() {
    this.props.onStop(this.state.selectedResources);
  }

  render() {
    // const { userName, projectId } = this.props.match.params;
    let tabPane = null;
    if (this.state.selectedResources.length === 1) {
      const resourceSelected = this.state.data.find(resource => resource.get('id') === this.state.selectedResources[0].id);
      tabPane = <TabPane resourceSelected={resourceSelected} />;
    }
    return (
      <div>
        <TableToolbar>
          <IconPlay />
          <IconPause />
          <IconDelete onClick={this.onDelete} />
          <Link to="resources/new">
            <IconAdd />
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

const mapStateToProps = state => ({
  resources: state.scenes.project.resources,
});

const mapDispatchToProps = dispatch => ({
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
