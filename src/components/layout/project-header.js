import React from 'react';

class ProjectHeader extends React.Component {
  render() {
    return (
      <div className="project-header">
        <h3 className="project-header-title">
          {this.props.namespace} / {this.props.projectName} 
          {this.props.location ? ` / ${this.props.location}`: ''}
          {this.props.locationName ? ` / ${this.props.locationName}` : ''}
        </h3>
      </div>
    );
  }
}

export default ProjectHeader;
