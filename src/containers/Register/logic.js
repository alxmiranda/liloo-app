import { createLogic } from 'redux-logic';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendRegisterError, sendRegisterSuccess } from './actions';
import { SEND_REGISTER } from './constants';

const sendRegisterLogic = createLogic({
  type: SEND_REGISTER,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action }, dispatch, done) {
    const requestURL = `${process.env.API_URL}/cadastro`;
    axios.post(requestURL, {
      nome: action.params.nome,
      sobreNome: action.params.sobreNome,
      email: action.params.email,
      senha: action.params.senha,
      tipoCliente: action.params.tipoCliente,
    }).then((success) => {
      dispatch(sendRegisterSuccess(success.data));
    }).catch((error) => {
      dispatch(sendRegisterError(error));
    }).then(done);
  },
});

export default sendRegisterLogic;
