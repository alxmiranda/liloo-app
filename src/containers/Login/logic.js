import { createLogic } from 'redux-logic';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendLoginError, sendLoginSuccess } from './actions';
import { SEND_LOGIN } from './constants';
import { END_POINT_LILOO } from '../../utils/api';


// For TESTING purposes, chrome may help to bypass CORS
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog
const sendLoginLogic = createLogic({
  type: SEND_LOGIN,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action }, dispatch, done) {
    const requestURL = `${process.env.API_URL}/login`
    axios.post(requestURL, {
      email: action.params.email,
      senha: action.params.senha,
    }).then((success) => {
      dispatch(sendLoginSuccess(success.data));
    }).catch((error) => {
      dispatch(sendLoginError(error));
    }).then(done);
  },
});

export default sendLoginLogic;
