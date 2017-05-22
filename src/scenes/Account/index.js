import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Profile from './scenes/Profile';
import Settings from './scenes/Settings';
import Email from './scenes/Email';
import SSHKeys from './scenes/SSHKeys';
import Integrations from './scenes/Integrations';
import Invite from './scenes/Invite';

const Title = styled.h1`
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  width: 20%;
`;

export default function Account(props) {
  const { params, url } = props.match;
  return (
    <Container>
      <Column1>
        <Title>Username</Title>
        <Navigation {...params} />
      </Column1>
      <Switch>
        <Redirect from={`${url}`} to={`${url}/profile`} exact />
        <Route path={`${url}/profile`} component={Profile} />
        <Route path={`${url}/settings`} component={Settings} />
        <Route path={`${url}/email`} component={Email} />
        <Route path={`${url}/sshkeys`} component={SSHKeys} />
        <Route path={`${url}/integrations`} component={Integrations} />
        <Route path={`${url}/invite`} component={Invite} />
      </Switch>
    </Container>
  );
}

Account.defaultProps = {

};

Account.propTypes = {
  match: PropTypes.object.isRequired,
};
