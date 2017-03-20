import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './scenes/Profile';
import Settings from './scenes/Settings';
import Email from './scenes/Email';
import SSHKeys from './scenes/SSHKeys';
import Integrations from './scenes/Integrations';
import Invite from './scenes/Invite';

export default function Account(props) {
  const { url } = props.match;
  return (
    <Switch>
      <Redirect from={`${url}/`} to={`${url}/profile`} exact />
      <Route path={`${url}/profile`} component={Profile} />
      <Route path={`${url}/settings`} component={Settings} />
      <Route path={`${url}/email`} component={Email} />
      <Route path={`${url}/ssh-keys`} component={SSHKeys} />
      <Route path={`${url}/integrations`} component={Integrations} />
      <Route path={`${url}/invite`} component={Invite} />
    </Switch>
  );
}

Account.defaultProps = {

};

Account.propTypes = {
  match: PropTypes.object.isRequired,
};
