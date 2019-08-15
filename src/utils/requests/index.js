import axios from 'axios';
import { getUser } from '../user';

const dataUser = getUser();
let requestUtil;
if(dataUser) {
  const { data } = dataUser;
  const config = {
    baseURL: `${process.env.API_URL}`,
    headers: {
      accessKey: data.perfilAPI.accessKey,
      perfil: data.perfilAPI.perfil,
    },
  };
  requestUtil = options => (axios({ ...config, ...options }));
} else {
  console.error('algo deu errado')
}

export default requestUtil;
