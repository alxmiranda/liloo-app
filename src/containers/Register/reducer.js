import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_ERROR,
} from './constants';

const initialState = {
  loading: false,
  status: 'PENDING',
};

function sendRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case SEND_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: 'SEND_REGISTER_SUCCESS',
      };
    case SEND_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        status: 'SEND_REGISTER_ERROR',
      };
    default:
      return state;
  }
}

export default sendRegisterReducer;
