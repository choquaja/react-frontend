import React from 'react';
import '../../images/icon-sprite.svg';
import { Link } from 'react-router';

class VerticalNavigation extends React.Component {
  render() {
    const { userName, projectId } = this.props;
    return (
      <div className="vertical-nav">
        <ul className="vertical-nav-menu">
          <li>
            <Link to={`/${userName}/projects/${projectId}`}>Overview</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/board`}>Board</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/resources`}>Files</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/workspaces`}>Workspaces</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/models`}>Models</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/jobs`}>Jobs</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/collaborators`}>Collaborators</Link>
          </li>
          <li>
            <Link to={`/${userName}/projects/${projectId}/settings`}>Settings</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default VerticalNavigation;
