import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getUserInfosSuccess,
  getUserInfosError,
  postUserInfosSuccess,
  postUserInfosError,
} from './actions';
import { GET_USER_INFOS, POST_USER_INFOS } from './constants';

const getUserInfosLogic = createLogic({
  type: GET_USER_INFOS,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ request }, dispatch, done) {
    const options = { url: '/registerdetails' };
    request(
      options,
      success => dispatch(getUserInfosSuccess(success.data.data)),
      error => dispatch(getUserInfosError(error)),
    ).then(() => done());
  },
});

export const postUserInfosLogic = createLogic({
  type: POST_USER_INFOS,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action, request }, dispatch, done) {
    const options = {
      url: '/registerdetails',
      method: 'POST',
      data: {
        ...action.params,
        ddd: action.params.telefone.split(' ')[0],
        telefone: action.params.telefone.split(' ')[1],
      },
    };
    request(
      options,
      success => dispatch(postUserInfosSuccess(success.data.data)),
      error => dispatch(postUserInfosError(error)),
    ).then(() => done());
  },
});

export default getUserInfosLogic;
