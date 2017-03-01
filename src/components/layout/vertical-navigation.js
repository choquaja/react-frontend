import React from 'react';
import * as Material from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';

class VerticalNavigation extends React.Component {
  render() {
    const { userName, projectId } = this.props;
    return (
      <div className="vertical-nav">
        <div className="vertical-nav-menu">
          <NavLink
            to={`/${userName}/${projectId}/overview`}
            activeClassName="active"
          >
            <Material.MdRemoveRedEye className="vertical-nav-icon" />
            Overview
          </NavLink>
          <NavLink
            to={`/${userName}/${projectId}/board`}
            activeClassName="active"
          >
            <Material.MdDashboard className="vertical-nav-icon" />
            Board
          </NavLink>
          <NavLink
            to={`/${userName}/${projectId}/files`}
            activeClassName="active"
          >
            <Material.MdFolder className="vertical-nav-icon" />
            Files
          </NavLink>
          <NavLink
            to={`/${userName}/${projectId}/resources`}
            activeClassName="active"
          >
            <Material.MdBuild className="vertical-nav-icon" />
            Resources
          </NavLink>
          <NavLink
            to={`/${userName}/${projectId}/collaborators`}
            activeClassName="active"
          >
            <Material.MdPeople className="vertical-nav-icon" />
            Collaborators
          </NavLink>
          <NavLink
            to={`/${userName}/${projectId}/settings`}
            activeClassName="active"
          >
            <Material.MdSettings className="vertical-nav-icon" />
            Settings
          </NavLink>
        </div>
      </div>
    );
  }
}

export default VerticalNavigation;
