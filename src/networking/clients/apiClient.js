import axios from 'axios';
import { baseURL, headers } from '@/networking/config';

const instance = axios.create({ baseURL, headers });

export const setAuthHeader = (token) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export default instance;
