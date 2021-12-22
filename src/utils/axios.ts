import { infoToast, errorToast, warningToast } from './../components/shared/Toast';
import axios, { AxiosInstance } from 'axios';

export class UnauthenticatedException extends Error {}
export class InternalServerException extends Error {}
export class NotFoundException extends Error {}

export const ApiInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response.status) {
        case 500:
          errorToast('🧯 something went wrong');
          break;
        case 404:
          infoToast('📡 page not found detected');
          break;
        case 401:
          warningToast('🔑 permissions denied');
          break;
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
