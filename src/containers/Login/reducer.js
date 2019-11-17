import {
  SEND_LOGIN,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_ERROR,
  SEND_LOGOUT,
} from './constants';

const initialState = {
  loading: false,
  status: 'PENDING',
  userInfo: {},
  error: '',
};

function sendLoginReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case SEND_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        userInfo: Object.assign(state.userInfo, action.success.data),
        status: 'SEND_LOGIN_SUCCESS',
      };
    case SEND_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        logged: false,
        status: 'SEND_LOGIN_ERROR',
        error: action.error,
      };
    case SEND_LOGOUT:
      return {
        ...state,
        logged: false,
        status: 'PENDING',
        userInfo: {},
      };
    default:
      return state;
  }
}

export default sendLoginReducer;
