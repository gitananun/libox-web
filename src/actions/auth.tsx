import { ReduxAction } from 'components/interfaces/Redux';
import { AuthTokenModel } from 'data/models/AuthTokenModel';
import { SuccessResponse } from 'data/shared/Response';
import {
  authForgotPassword,
  AuthForgotPasswordParams,
  authLogin,
  AuthLoginParams,
  authRegister,
  AuthRegisterParams,
  authResetPassword,
  AuthResetPasswordParams,
  authSelf,
  authUpdateUser,
  AuthUpdateUserParams,
} from 'services/auth';
import { loginStateAction, logoutStateAction, updateUserStateAction } from 'store/Auth/auth.actions';
import store from 'store/store';
import { removeAccessToken } from 'utils/shared';

const { dispatch } = store;

export const authSelfAction = async (): Promise<ReduxAction> => {
  return authSelf().then((data) => dispatch(loginStateAction(data.body)));
};

export const authForgotPasswordAction = async (params: AuthForgotPasswordParams): Promise<SuccessResponse<string>> => {
  return authForgotPassword(params);
};

export const authResetPasswordAction = async (params: AuthResetPasswordParams): Promise<SuccessResponse<string>> => {
  return authResetPassword(params);
};

export const authLoginAction = async (params: AuthLoginParams): Promise<SuccessResponse<AuthTokenModel>> => {
  return authLogin(params);
};

export const authRegisterAction = async (params: AuthRegisterParams): Promise<SuccessResponse<AuthTokenModel>> => {
  return authRegister(params);
};

export const authLogoutAction = async () => {
  removeAccessToken();
  dispatch(logoutStateAction());
};

export const authUpdateUserAction = async (params: AuthUpdateUserParams) => {
  return authUpdateUser(params).then((data) => dispatch(updateUserStateAction(data.body)));
};
