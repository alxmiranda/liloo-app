import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_ERROR,
} from './constants';

export const sendRegister = params => ({
  type: SEND_REGISTER,
  params,
});

export const sendRegisterSuccess = success => ({
  type: SEND_REGISTER_SUCCESS,
  success,
});

export const sendRegisterError = error => ({
  type: SEND_REGISTER_ERROR,
  error,
});
