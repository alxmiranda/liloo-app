import React from 'react';
import { deleteUser, getUser } from './../../../utils/user';
import { withRouter } from 'react-router-dom';

export const AuthContext = React.createContext({});

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      userInfo: {}
    }
  }

  componentDidMount() {
    this.setUser();
  }

  getUser = () => {
    return getUser();
  }

  setUser = () => {
    if(this.getUser()) {
      this.setState({
        ...this.state,
        userInfo: {
          ...this.state.userInfo,
          ...this.getUser().data,
        }
      })
    }
  }

  redirect = () => {
    deleteUser();
    this.props.history.push('/entrar');
  }

  logout = () => {
    this.setState({
      ...this.state,
      logged: false,
    }, () => this.redirect())
  }

  render() {
    const {
      login,
      logout,
      redirect
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
    }

    return (
      <AuthContext.Provider value={dataValue}>
        {children}
      </AuthContext.Provider>
    )
  }
}

export default withRouter(Auth);