import { getAccessToken, removeAccessToken } from './shared';
import { rejectValidationAction, resolveValidationAction } from './../store/Validation/validation.actions';
import { infoToast, errorToast, warningToast } from './../components/shared/Toast';
import axios, { AxiosInstance } from 'axios';
import store from 'store/store';

export class UnauthenticatedException extends Error {}
export class InternalServerException extends Error {}
export class NotFoundException extends Error {}

interface Instance {
  auth?: boolean;
}

export const instance = (args?: Instance): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
    headers: args?.auth ? { Authorization: `Bearer ${getAccessToken()}` } : {},
  });

  const { dispatch } = store;

  instance.interceptors.response.use(
    (response) => {
      dispatch(resolveValidationAction());
      return response;
    },
    (error) => {
      switch (error.response.status) {
        case 500:
          errorToast('🧯 internal server error');
          break;
        case 404:
          infoToast('📡 something not found detected');
          break;
        case 401:
          removeAccessToken();
          dispatch(resolveValidationAction());
          warningToast(`🔑 ${error.response.data.message}`);
          break;
        case 422:
          dispatch(rejectValidationAction(error.response.data.errors));
          break;
        default:
          errorToast('🧯 something went wrong');
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
