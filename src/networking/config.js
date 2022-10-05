import { Config } from 'react-native-config';

export const baseURL = Config.API_BASE_URL;
export const movieDBAPIUrl = Config.MOVIEDB_API_URL;
export const movieDBBearerToken = Config.MOVIEDB_BEARER_TOKEN;

export const headers = {
  'Content-Type': 'application/json',
};
