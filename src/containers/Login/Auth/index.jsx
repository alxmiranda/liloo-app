import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteUser, getUser } from './../../../utils/user';
import { sendLogout } from './../actions';

export const AuthContext = React.createContext({});

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      userInfo: {},
    };
  }

  componentDidMount() {
    this.setUser();
  }

  getUser = () => getUser();

  setUser = () => {
    if (this.getUser()) {
      this.setState({
        ...this.state,
        logged: true,
        userInfo: {
          ...this.state.userInfo,
          ...this.getUser(),
        },
      });
    }
  }

  redirect = () => {
    deleteUser();
    this.props.sendLogoutDispatch();
    this.props.history.push('/entrar');
  }

  logout = () => {
    this.setState({
      ...this.state,
      logged: false,
    }, () => this.redirect());
  }

  render() {
    const {
      login,
      logout,
      redirect,
    } = this;

    const {
      children,
    } = this.props;

    const {
      logged,
    } = this.state;

    const dataValue = {
      methods: {
        login,
        logout,
        redirect,
      },
      logged,
    };

    return (
      <AuthContext.Provider value={dataValue}>
        {children}
      </AuthContext.Provider>
    );
  }
}

// export default withRouter(Auth);
export function mapDispatchToProps(dispatch) {
  return {
    sendLogoutDispatch: () => dispatch(sendLogout()),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(Auth));
