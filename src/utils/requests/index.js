import axios from 'axios';
import { getUser } from '../user';
import handleErrorRequest from './handleError';

const dataUser = getUser();

const config = {
  baseURL: `${process.env.API_URL}`,
  headers: {
    accessKey: dataUser && dataUser.perfilAPI.accessKey,
    perfil: dataUser && dataUser.perfilAPI.perfil,
  },
};

const requestUtil = (options, cbSuccess, cbError) =>
  axios({ ...config, ...options })
    .then(success => cbSuccess(success))
    .catch(error => cbError(handleErrorRequest(error)));

export default requestUtil;
