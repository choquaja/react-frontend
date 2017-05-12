import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Row from '../../components/shared/row';
import Column from '../../components/shared/column';
import Navigation from './components/Navigation';
import Overview from './scenes/Overview';
import Files from './scenes/Files';
import Resources from './scenes/Resources';
import NewResource from './scenes/NewResource';
import Collaborators from './scenes/Collaborators';
import Settings from './scenes/Settings';
import ContentCard from '../../components/ContentCard';

const Breadcrumbs = styled.div`
  margin: -.2rem 0 -1.2rem;
  font-size: 1.1em;
  font-weight: 600;
`;
const Slash = styled.span`
  display: inline-block;
  margin: 0 .5rem;
  opacity: .4;
`;

function Project(props) {
  const { params, url } = props.match;
  return (
    <div>
      <Row>
        <Column size={12}>
          <ContentCard column>
            <Breadcrumbs>{params.userName}<Slash>/</Slash>{params.projectName}</Breadcrumbs>
          </ContentCard>
        </Column>
      </Row>
      <Row>
        <Column size={3}>
          <ContentCard column>
            <Navigation {...params} />
          </ContentCard>
        </Column>
        <Column size={9}>
          <ContentCard column>
            <Switch>
              <Redirect from={`${url}/`} to={`${url}/overview`} exact />
              <Route path={`${url}/overview`} component={Overview} />
              <Route path={`${url}/files`} component={Files} />
              <Route path={`${url}/resources/new`} component={NewResource} />
              <Route path={`${url}/resources`} component={Resources} />
              <Route path={`${url}/collaborators`} component={Collaborators} />
              <Route path={`${url}/settings`} component={Settings} />
            </Switch>
          </ContentCard>
        </Column>
      </Row>
    </div>
  );
}

Project.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Project;
