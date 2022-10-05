import axios from 'axios';
import {
  baseURL as apiBaseUrl,
  headers,
  movieDBAPIUrl,
  movieDBBearerToken,
} from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
  constructor(_paramConfig = {}) {
    const defaultConfig = { baseURL: apiBaseUrl, headers };
    const { bearerToken, ...paramConfig } = _paramConfig;
    const config = { ...defaultConfig, ...paramConfig };
    this.client = axios.create(config);
    this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
    if (bearerToken) {
      this.setAccessToken(bearerToken);
    }
  }

  setAccessToken(token) {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }

  async request({ method, url, data, ...config }) {
    return this.client.request({ method, url, data, ...config });
  }
}

export const networkService = new NetworkService();

export const movieDBNetworkService = new NetworkService({
  baseURL: movieDBAPIUrl,
  bearerToken: movieDBBearerToken,
});
