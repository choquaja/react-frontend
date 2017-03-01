import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VerticalNavigation from '../layout/vertical-navigation';
import Overview from './overview';
import BoardWrapper from './board-wrapper';
import Files from './files';
import Resources from './resources';
import NewResource from './new-resource';
import Collaborators from './collaborators';
import ProjectSettings from './project-settings';

class Project extends React.Component {
  render() {
    const {params, url} = this.props.match;
    return (
      <div className="row">
        <div className="sidebar col-lg-2 col-sm-3">
          <VerticalNavigation {...params}/>
        </div>
        <div className="main col-lg-9 col-sm-8">
          <Switch>
            <Route path={`${url}/overview`} component={Overview} />
            <Route path={`${url}/board`} component={BoardWrapper} />
            <Route path={`${url}/files`} component={Files} />
            <Route path={`${url}/resources`} component={Resources} />
            <Route path={`${url}/resources/new`} component={NewResource} />
            <Route path={`${url}/collaborators`} component={Collaborators} />
            <Route path={`${url}/settings`} component={ProjectSettings} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Project;
