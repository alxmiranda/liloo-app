import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendLogin } from './actions';
import { login } from '../../services/auth';
import Login from '../../components/LoginAndRegister/Login/';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendLoginReducer } = useSelector(state => state);
  const { logged, userInfo } = sendLoginReducer;

  const handleLogin = (data) => {
    dispatch(sendLogin(data));
  };

  if (logged) {
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
