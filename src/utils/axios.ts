import { infoToast, errorToast, warningToast } from './../components/shared/Toast';
import axios, { AxiosInstance } from 'axios';

export class UnauthenticatedException extends Error {}
export class InternalServerException extends Error {}
export class NotFoundException extends Error {}

export const instance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response.status) {
        case 500:
          errorToast('🧯 internal server error');
          break;
        case 404:
          infoToast('📡 something not found detected');
          window.location.replace('/not-found');
          break;
        case 401:
          warningToast('🔑 permissions denied');
          break;
        default:
          errorToast('🧯 something went wrong');
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
