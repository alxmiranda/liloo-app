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
    request({ url: '/registerdetails' })
      .then(success => dispatch(getUserInfosSuccess(success.data.data)))
      .catch(error => dispatch(getUserInfosError(error)))
      .then(done);
  },
});

export const postUserInfosLogic = createLogic({
  type: POST_USER_INFOS,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action, request }, dispatch, done) {
    console.log('logic', action);
    request({
      url: '/registerdetails',
      method: 'POST',
      data: {
        ...action.params,
        ddd: action.params.telefone.split(' ')[0],
        telefone: action.params.telefone.split(' ')[1],
      },
    })
      .then(success => dispatch(postUserInfosSuccess(success.data.data)))
      .catch(error => dispatch(postUserInfosError(error)))
      .then(done);
  },
});

export default getUserInfosLogic;
