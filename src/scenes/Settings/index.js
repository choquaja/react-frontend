import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Row from '../../components/shared/row';
import Column from '../../components/shared/column';
import AnimFade from '../../components/AnimFade';
import ContentCard from '../../components/ContentCard';
import Navigation from './components/Navigation';

import Profile from './scenes/Profile';
import Account from './scenes/Account';
// import Email from './scenes/Email';
import SSHKeys from './scenes/SSHKeys';
import Integrations from './scenes/Integrations';
import Invite from './scenes/Invite';

export default function Settings(props) {
  const { url } = props.match;
  return (
    <AnimFade>
      <div key="div">
        <Row>
          <Column size={3}>
            <ContentCard column>
              <Navigation url={url} />
            </ContentCard>
          </Column>
          <Column size={9}>
            <Switch>
              <Redirect from={`${url}`} to={`${url}/profile`} exact />
              <Route path={`${url}/profile`} component={Profile} />
              <Route path={`${url}/account`} component={Account} />
              {/* <Route path={`${url}/email`} component={Email} /> */}
              <Route path={`${url}/sshkeys`} component={SSHKeys} />
              <Route path={`${url}/integrations`} component={Integrations} />
              <Route path={`${url}/invite`} component={Invite} />
            </Switch>
          </Column>
        </Row>
      </div>
    </AnimFade>
  );
}

Settings.propTypes = {
  match: PropTypes.object.isRequired,
};
