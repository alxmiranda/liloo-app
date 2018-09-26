import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendRegister } from './actions';
import Register from '../../components/LoginAndRegister/Register/';

export class RegisterPage extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'SEND_REGISTER_SUCCESS') {
      this.props.history.push('/entrar');
    }
  }

  sendRegisterFun = formData => this.props.sendRegisterDispatch(formData);

  render() {
    return (
      <Register
        sendRegister={this.sendRegisterFun}
      />
    );
  }
}

export const mapStateToProps = ({ sendRegisterReducer }) => ({
  sendRegister: sendRegisterReducer,
  status: sendRegisterReducer.status,
  loadingsendRegister: sendRegisterReducer.loading,
});

export function mapDispatchToProps(dispatch) {
  return {
    sendRegisterDispatch: params => dispatch(sendRegister(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

// export default RegisterPage;
