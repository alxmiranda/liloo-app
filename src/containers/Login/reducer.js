import {
  SEND_LOGIN,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_ERROR,
} from './constants';

const initialState = {
  loading: false,
  status: 'PENDING',
  userInfo: {},
};

function sendLoginReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_LOGIN:
      return { ...state, loading: true };
    case SEND_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        state: Object.assign(state, action),
        status: 'SEND_LOGIN_SUCCESS',
      };
    case SEND_LOGIN_ERROR:
      return {
        ...state, loading: false, status: 'SEND_LOGIN_ERROR',
      };
    default:
      return state;
  }
}

export default sendLoginReducer;
