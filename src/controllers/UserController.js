import { routes } from '@/controllers/routes';
import { strings } from '@/localization';
import apiClient from '@/networking/clients/apiClient';

export const loginApiCall = async ({ username, password, demoMode }) => {
  if (demoMode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ data: { user: { username } } });
        } else {
          reject({ data: { error: strings.login.invalidCredentials } });
        }
      }, 250);
    });
  }

  return apiClient.post(routes.authentication.login, {
    params: { username, password },
  });
};

export const logoutApiCall = async ({ demoMode } = {}) => {
  if (demoMode) {
    return new Promise((resolve) => {
      setTimeout(resolve, 250);
    });
  }

  return apiClient.delete(routes.authentication.logout);
};
