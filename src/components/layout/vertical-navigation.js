import React from 'react';
import '../images/icon-sprite.svg';

class VerticalNavigation extends React.Component {
  render() {
    return (
      <div className="vertical-nav">
        <ul className="vertical-nav-menu">
          <svg-icon>
            <src href="../images/icon-sprite.svg#si-glyph-house" />
          </svg-icon>
          <li> Overview</li>
          <li>Files</li>
          <li>Workspaces</li>
          <li>Models</li>
          <li>Jobs</li>
          <li>Collaborators</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

export default VerticalNavigation;
