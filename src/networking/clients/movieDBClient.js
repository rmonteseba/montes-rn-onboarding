import axios from 'axios';
import { headers, movieDBAPIUrl, movieDBBearerToken } from '@/networking/config';

const instance = axios.create({ baseURL: movieDBAPIUrl, headers });

export const setAuthHeader = (token) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

setAuthHeader(movieDBBearerToken);

export default instance;
