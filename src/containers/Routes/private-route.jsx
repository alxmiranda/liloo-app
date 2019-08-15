import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import Auth, { AuthContext } from '../Login/Auth'
import { getUser } from '../../utils/user';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log('oooo');
  }

  componentAuth = () => (
    <Route component={this.props.component} />
  )

  render() {
    return (
      <Auth>
        <AuthContext.Consumer>
          {
            value => {
              console.log(!value.logged)
              return (
              <Route
                {...this.props}
                render={props =>
                  (
                    !value.logged ? (
                      <Redirect
                        to={{
                          pathname: '/entrar',
                          state: { from: props.location },
                        }}
                      />
                    ) : this.componentAuth(this.props)
                  )
                }
              />
              )
            }
          }
        </AuthContext.Consumer>
      </Auth>
    );
  }
}

export default PrivateRoute;

// const PrivateRoute = ({ component: Component, ...rest }) =>
//   (
//     <Route
//       {...rest}
//       render={props =>
//         (
//           !getUser() ? (
//             <Redirect
//               to={{
//                 pathname: '/entrar',
//                 state: { from: props.location },
//               }}
//             />
//           ) : (<Component {...props} />)
//         )
//       }
//     />
//   );

// export default PrivateRoute;
