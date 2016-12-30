import React from 'react';

import VerticalNavigation from '../layout/vertical-navigation';

class Project extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <VerticalNavigation {...this.props.params}/>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  } 
}

export default Project;
