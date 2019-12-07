import axios from 'axios';
import { getAccessKey, getProfile } from '../user';
import handleErrorRequest from './handleError';

// const config = {
//   baseURL: `${process.env.API_URL}`,
//   // headers: {
//   //   accessKey: User && User.perfilAPI.accessKey,
//   //   perfil: User &&  User.perfilAPI.perfil,
//   // },
// };

const api = axios.create({
  baseURL: `${process.env.API_URL}`,
});

const requestUtil = (options, cbSuccess, cbError) => {
  // api.interceptors.request.use(async (config) => {
  //   const setConfig = config;
  //   const accessKey = getAccessKey();
  //   const profile = getProfile();

  //   if (accessKey && profile) {
  //     setConfig.headers.accessKey = accessKey;
  //     setConfig.headers.perfil = profile;
  //   }

  //   for (prop in options) {
  //     const nobj = {};
  //     nobj[prop] = obj[prop]
  //     setConfig.headers[prop] = options[prop];
  //     console.log(setConfig);
  //   }

  //   return setConfig;
  // });
  return api()
    .then(success => cbSuccess(success))
    .catch(error => console.log(error));
};

export default requestUtil;

