import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './scenes/Login';
import Logout from './scenes/Logout';
import ResetPassword from './scenes/ResetPassword';
import DoResetPassword from './scenes/DoResetPassword';

export default function Auth(props) {
  const { url } = props.match;
  return (
    <Switch>
      <Redirect from={`${url}/`} to={`${url}/login`} exact />
      <Route path={`${url}/login`} component={Login} />
      <Route path={`${url}/logout`} component={Logout} />
      <Route path={`${url}/reset-password`} component={ResetPassword} />
      <Route path={`${url}/do-reset-password`} component={DoResetPassword} />
    </Switch>
  );
}

Auth.defaultProps = {

};

Auth.propTypes = {
  match: PropTypes.object.isRequired,
};
