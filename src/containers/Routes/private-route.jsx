import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { getUser } from '../../utils/user';

const PrivateRoute = ({ component: Component, ...rest }) =>
  (
    <Route
      {...rest}
      render={props =>
        (
          !getUser() ? (
            <Redirect
              to={{
                pathname: '/entrar',
                state: { from: props.location },
              }}
            />
          ) : (<Component {...props} />)
        )
      }
    />
  );

export default PrivateRoute;
