import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authed, redirectPath, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
