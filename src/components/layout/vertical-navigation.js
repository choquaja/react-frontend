import React from 'react';
import * as Material from 'react-icons/lib/md';
import { Link } from 'react-router';

class VerticalNavigation extends React.Component {
  render() {
    const { userName, projectId } = this.props;
    return (
      <div className="vertical-nav">
        <ul className="vertical-nav-menu">
          <li>
            <Material.MdRemoveRedEye/>
            <Link to={`/${userName}/projects/${projectId}`}>Overview</Link>
          </li>
          <li>
            <Material.MdDashboard/>
            <Link to={`/${userName}/projects/${projectId}/board`}>Board</Link>
          </li>
          <li>
            <Material.MdFolder/>
            <Link to={`/${userName}/projects/${projectId}/resources`}>Files</Link>
          </li>
          <li>
            <Material.MdWork/>
            <Link to={`/${userName}/projects/${projectId}/workspaces`}>Workspaces</Link>
          </li>
          <li>
            <Material.MdFunctions/>
            <Link to={`/${userName}/projects/${projectId}/models`}>Models</Link>
          </li>
          <li>
            <Material.MdBuild/>
            <Link to={`/${userName}/projects/${projectId}/jobs`}>Jobs</Link>
          </li>
          <li>
            <Material.MdPeople/>
            <Link to={`/${userName}/projects/${projectId}/collaborators`}>Collaborators</Link>
          </li>
          <li>
            <Material.MdSettings/>
            <Link to={`/${userName}/projects/${projectId}/settings`}>Settings</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default VerticalNavigation;
