import { createLogic } from 'redux-logic';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendLoginError, sendLoginSuccess } from './actions';
import { SEND_LOGIN } from './constants';
import { saveUser } from './../../utils/user';

const sendLoginLogic = createLogic({
  type: SEND_LOGIN,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action }, dispatch, done) {
    const requestURL = `${process.env.API_URL}/login`;
    axios.post(requestURL, {
      email: action.params.email,
      senha: action.params.senha,
    }).then((success) => {
      if (success.data.codeRestult === 1) {
        dispatch(sendLoginError(success.data.errorMsg));
      } else {
        saveUser(success.data);
        dispatch(sendLoginSuccess(success.data));
      }
    }).catch((error) => {
      dispatch(sendLoginError(error));
    }).then(done);
  },
});

export default sendLoginLogic;
