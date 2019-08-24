import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendLoginError, sendLoginSuccess } from './actions';
import { SEND_LOGIN } from './constants';
import { saveUser } from './../../utils/user';

const sendLoginLogic = createLogic({
  type: SEND_LOGIN,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action, request }, dispatch, done) {
    const options = {
      method: 'POST',
      url: '/login',
      data: {
        email: action.params.email,
        senha: action.params.senha,
      },
    };
    request(
      options,
      (success) => {
        saveUser(success.data.data);
        dispatch(sendLoginSuccess(success.data));
      },
      error => dispatch(sendLoginError(error)),
      false,
    ).then(() => done());
  },
});

export default sendLoginLogic;
