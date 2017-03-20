import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import Row from '../../components/shared/row';
import Column from '../../components/shared/column';
import Navigation from './components/Navigation';
import Overview from './scenes/Overview';
import Board from './scenes/Board';
import Files from './scenes/Files';
import Resources from './scenes/Resources';
import NewResource from './scenes/NewResource';
import Collaborators from './scenes/Collaborators';
import Settings from './scenes/Settings';

function Project(props) {
  const { params, url } = props.match;
  return (
    <Row>
      <Column size={3}>
        <Navigation {...params} />
      </Column>
      <Column size={9}>
        <Switch>
          <Route path={`${url}/overview`} component={Overview} />
          <Route path={`${url}/board`} component={Board} />
          <Route path={`${url}/files`} component={Files} />
          <Route path={`${url}/resources/new`} component={NewResource} />
          <Route path={`${url}/resources`} component={Resources} />
          <Route path={`${url}/collaborators`} component={Collaborators} />
          <Route path={`${url}/settings`} component={Settings} />
        </Switch>
      </Column>
    </Row>
  );
}

Project.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Project;
