import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import New from './scenes/New';

export default function Projects(props) {
  const { url } = props.match;
  return (
    <Switch>
      <Redirect from={`${url}/`} to={`${url}/new`} exact />
      <Route path={`${url}/new`} component={New} />
    </Switch>
  );
}

Projects.defaultProps = {

};

Projects.propTypes = {
  match: PropTypes.object.isRequired,
};
