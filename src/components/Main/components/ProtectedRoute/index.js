import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../../../services/authToken';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest} render={props => (
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { next: props.location.pathname }, // eslint-disable-line
            }}
          />
        )
      )}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
