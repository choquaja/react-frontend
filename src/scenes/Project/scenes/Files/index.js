import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './scenes/List';
import Preview from './scenes/Preview';
import Edit from './scenes/Edit';

export default function Files(props) {
  const { url } = props.match;
  return (
    <Switch>
      <Route path={`${url}/`} component={List} exact />
      <Route path={`${url}/edit/:fileId`} component={Edit} />
      <Route path={`${url}/preview/:fileId`} component={Preview} />
      <Redirect to={`${url}/`} />
    </Switch>
  );
}

Files.propTypes = {
  match: PropTypes.object.isRequired,
};
