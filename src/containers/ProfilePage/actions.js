import {
  GET_USER_INFOS,
  GET_USER_INFOS_SUCCESS,
  GET_USER_INFOS_ERROR,
} from './constants';

export const getUserInfos = params => ({
  type: GET_USER_INFOS,
  params,
});

export const getUserInfosSuccess = success => ({
  type: GET_USER_INFOS_SUCCESS,
  success,
});

export const getUserInfosError = error => ({
  type: GET_USER_INFOS_ERROR,
  error,
});
