import { createLogic } from 'redux-logic';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import requestUtil from '../../utils/requests';
import { sendRegisterError, sendRegisterSuccess } from './actions';
import { SEND_REGISTER } from './constants';
import { END_POINT_LILOO } from '../../utils/api';


// For TESTING purposes, chrome may help to bypass CORS
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog
const sendRegisterLogic = createLogic({
  type: SEND_REGISTER,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action }, dispatch, done) {
    const requestURL = 'http://localhost:9002/cadastro';
    axios.post(requestURL, {
      nome: action.params.nome,
      sobreNome: action.params.sobreNome,
      email: action.params.email,
      senha: action.params.senha,
    }).then((success) => {
      dispatch(sendRegisterSuccess(success.data));
    }).catch((error) => {
      dispatch(sendRegisterError(error));
    }).then(done);
  },
});

export default sendRegisterLogic;
