import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import connector from './connector';
import './logic';

import Row from '../../components/shared/row';
import Column from '../../components/shared/column';
import Navigation from './components/Navigation';
import ContentCard from '../../components/ContentCard';
import NoContent from '../../components/NoContent';
import AnimFade from '../../components/AnimFade';

import Overview from './scenes/Overview';
import Files from './scenes/Files';
import Resources from './scenes/Resources';
import NewResource from './scenes/NewResource';
import Collaborators from './scenes/Collaborators';
import Settings from './scenes/Settings';

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
  const { match: { params, url }, data } = props;
  if (!data) return <NoContent>The project you are looking for could not be found.</NoContent>;
  return (
    <AnimFade>
      <div key="div">
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
            <Switch>
              <Redirect from={`${url}/`} to={`${url}/overview`} exact />
              <Route path={`${url}/overview`} component={Overview} />
              <Route path={`${url}/files`} component={Files} />
              <Route path={`${url}/resources/new`} component={NewResource} />
              <Route path={`${url}/resources`} component={Resources} />
              <Route path={`${url}/collaborators`} component={Collaborators} />
              <Route path={`${url}/settings`} component={Settings} />
            </Switch>
          </Column>
        </Row>
      </div>
    </AnimFade>
  );
}

Project.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object.isRequired,
};

Project.defaultProps = {
  data: {},
};

export default connector(Project);
