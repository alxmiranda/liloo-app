import {
  SEND_LOGIN,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_ERROR,
} from './constants';

export const sendLogin = params => ({
  type: SEND_LOGIN,
  params,
});

export const sendLoginSuccess = success => ({
  type: SEND_LOGIN_SUCCESS,
  success,
});

export const sendLoginError = error => ({
  type: SEND_LOGIN_ERROR,
  error,
});
