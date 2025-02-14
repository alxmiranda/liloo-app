import axios from 'axios';
import { getAccessKey, getProfile } from './auth';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(async (config) => {
  const accessKey = getAccessKey();
  const accessProfile = getProfile();
  const refConfig = config;

  if (accessKey && accessProfile) {
    // refConfig.headers.Authorization = `Bearer ${token}`;
    refConfig.headers.accessKey = accessKey;
    refConfig.headers.perfil = accessProfile;
  }
  return refConfig;
});

export default api;
