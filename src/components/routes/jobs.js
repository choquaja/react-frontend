import React from 'react';
import ResourceTable from '../tables/resource-table';
import * as Material from 'react-icons/lib/md';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const that = this;
    fetch().then(function(response) {
      if (response.ok) {
        that.setState({
          data: response
        });
      }
    });
  }

  render() {
    const { userName, projectId } = this.props.params;
    return (
      <div>
        <div className="table-toolbar">
          <Material.MdPlayArrow/>
          <Material.MdPause/>
          <Material.MdDeleteForever/>
          <Link to={`${userName}/projects/${projectId}/workspaces/new`}>
            <Material.MdAddCircleOutline/>
          </Link>
        </div>
        <ResourceTable serverType={"jobs"} data={this.props.data}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.jobs
});

export default connect(mapStateToProps)(Jobs);
