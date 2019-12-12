import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { isAuthenticated } from '../../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          isAuthenticated() ?
              (<Component {...props} />) :
              (
                <Redirect
                  to={{
                    pathname: '/entrar',
                      state: { from: props.location },
                    }}
                />
              )
            )
          }
        }
    />
  )
}

export const mapStateToProps = ({ getUserInfosReducer }) => ({
  error: getUserInfosReducer.error,
});

export default connect(mapStateToProps)(PrivateRoute);
