import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Row from '../shared/row';
import Column from '../shared/column';
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
      <Row>
        <Column size={3}>
          <VerticalNavigation {...params}/>
        </Column>
        <Column size={9}>
          <Switch>
            <Route path={`${url}/overview`} component={Overview} />
            <Route path={`${url}/board`} component={BoardWrapper} />
            <Route path={`${url}/files`} component={Files} />
            <Route path={`${url}/resources/new`} component={NewResource} />
            <Route path={`${url}/resources`} component={Resources} />
            <Route path={`${url}/collaborators`} component={Collaborators} />
            <Route path={`${url}/settings`} component={ProjectSettings} />
          </Switch>
        </Column>
      </Row>
    );
  }
}

export default Project;
