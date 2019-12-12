import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendLogin } from './actions';
import { login } from '../../services/auth';
import Login from '../../components/LoginAndRegister/Login/';

// class LoginPage extends Component {
//   componentWillMount() {
//     // if (this.props.logged) {
//     //   this.props.history.push('/dashboard');
//     // }
//   }

//   componentWillReceiveProps(nextProps) {  
//     const { logged } = nextProps.logged;
//     console.log(logged)
//     if (logged) {
//       getUser();
//       this.props.history.push('/dashboard');
//     }
//   }

//   sendLogin = (data) => {
//     this.props.sendLoginDispatch(data);
//   };

//   render() {
//     return (
//       <Login
//         error={this.props.error}
//         sendLogin={this.sendLogin}
//       />
//     );
//   }
// }

// export const mapStateToProps = ({ sendLoginReducer }) => ({
//   sendLogin: sendLoginReducer,
//   logged: sendLoginReducer,
//   status: sendLoginReducer.status,
//   loadingsendLogin: sendLoginReducer.loading,
//   error: sendLoginReducer.error,
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     sendLoginDispatch: params => dispatch(sendLogin(params)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendLoginReducer } = useSelector(state => state);
  const { logged, userInfo } = sendLoginReducer;
  const handleLogin = (data) => {
    dispatch(sendLogin(data));
  };

  if (logged) {
    console.log(userInfo);
    login(userInfo);
    history.push('/dashboard');
  }

  return (
    <Login
      error={sendLoginReducer.error}
      sendLogin={handleLogin}
    />
  );
};

export default LoginPage;
