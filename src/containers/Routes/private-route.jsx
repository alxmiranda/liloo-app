import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { getUser } from '../../utils/user';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest, error }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
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
          }
    />
  )
}

export const mapStateToProps = ({ getUserInfosReducer }) => ({
  error: getUserInfosReducer.error,
});

export default connect(mapStateToProps)(PrivateRoute);
