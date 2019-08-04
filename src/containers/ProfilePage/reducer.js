import {
  GET_USER_INFOS,
  GET_USER_INFOS_SUCCESS,
  GET_USER_INFOS_ERROR,
} from './constants';

const initialState = {
  loading: false,
  status: 'PENDING',
  userInfos: {},
  error: '',
};

function getUserInfosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFOS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_INFOS_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfos: action.success,
        status: 'GET_USER_INFOS_SUCCESS',
      };
    case GET_USER_INFOS_ERROR:
      return {
        ...state,
        loading: false,
        status: 'GET_USER_INFOS_ERROR',
        error: action.error,
      };
    default:
      return state;
  }
}

export default getUserInfosReducer;
