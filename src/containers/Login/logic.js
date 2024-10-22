import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendLoginError, sendLoginSuccess } from './actions';
import { SEND_LOGIN } from './constants';

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
    request(options)
      .then(success => dispatch(sendLoginSuccess(success.data)))
      .catch(error => dispatch(sendLoginError(error)))
      .then(done);
  },
});

export default sendLoginLogic;
