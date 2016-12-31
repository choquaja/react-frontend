import React from 'react';

import VerticalNavigation from '../layout/vertical-navigation';

class Project extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="sidebar col-lg-2 col-sm-3">
          <VerticalNavigation {...this.props.params}/>
        </div>
        <div className="main col-lg-9 col-sm-8">
          {this.props.children}
        </div>
      </div>
    );
  } 
}

export default Project;
