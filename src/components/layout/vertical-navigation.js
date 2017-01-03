import React from 'react';
import * as Material from 'react-icons/lib/md';
import NavigationLink from './navigation-link';

class VerticalNavigation extends React.Component {
  render() {
    const { userName, projectId } = this.props;
    return (
      <div className="vertical-nav">
        <ul className="vertical-nav-menu">
          <NavigationLink
            to={`/${userName}/projects/${projectId}/overview`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdRemoveRedEye}>
              Overview
          </NavigationLink>
          <NavigationLink
            to={`/${userName}/projects/${projectId}/board`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdDashboard}>
              Board
          </NavigationLink>
          <NavigationLink
            to={`/${userName}/projects/${projectId}/files`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdFolder}>
              Files
          </NavigationLink>
          <NavigationLink
            to={`/${userName}/projects/${projectId}/resources`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdBuild}>
              Resources
          </NavigationLink>
          <NavigationLink
            to={`/${userName}/projects/${projectId}/collaborators`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdPeople}>
              Collaborators
          </NavigationLink>
          <NavigationLink
            to={`/${userName}/projects/${projectId}/settings`}
            index={false}
            onlyActiveOnIndex={false}
            IconComponent={Material.MdSettings}>
              Settings
          </NavigationLink>
        </ul>
      </div>
    );
  }
}

export default VerticalNavigation;
