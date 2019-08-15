import {
  GET_USER_INFOS,
  GET_USER_INFOS_SUCCESS,
  GET_USER_INFOS_ERROR,
  POST_USER_INFOS,
  POST_USER_INFOS_SUCCESS,
  POST_USER_INFOS_ERROR,
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

export const postUserInfos = params => ({
  type: POST_USER_INFOS,
  params,
});

export const postUserInfosSuccess = success => ({
  type: POST_USER_INFOS_SUCCESS,
  success,
});

export const postUserInfosError = error => ({
  type: POST_USER_INFOS_ERROR,
  error,
});
