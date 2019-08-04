import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLogin } from './actions';
import Login from '../../components/LoginAndRegister/Login/';

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'SEND_LOGIN_SUCCESS') {
      this.props.history.push('/dashboard');
    }
  }

  sendLogin = (data) => {
    this.props.sendLoginDispatch(data);
  };

  render() {
    return (
      <Login
        error={this.props.error}
        sendLogin={this.sendLogin}
      />
    );
  }
}

export const mapStateToProps = ({ sendLoginReducer }) => ({
  sendLogin: sendLoginReducer,
  status: sendLoginReducer.status,
  loadingsendLogin: sendLoginReducer.loading,
  error: sendLoginReducer.error,
});

export function mapDispatchToProps(dispatch) {
  return {
    sendLoginDispatch: params => dispatch(sendLogin(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
