import { rejectValidation } from './../store/Validation/validation.actions';
import { infoToast, errorToast, warningToast } from './../components/shared/Toast';
import axios, { AxiosInstance } from 'axios';
import store from 'store/store';

export class UnauthenticatedException extends Error {}
export class InternalServerException extends Error {}
export class NotFoundException extends Error {}

export const instance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
  });

  const { dispatch } = store;

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
        case 422:
          dispatch(rejectValidation(error.response.data.errors));
          errorToast(`📌 ${error.response.data.message}`);
          break;
        default:
          errorToast('🧯 something went wrong');
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
