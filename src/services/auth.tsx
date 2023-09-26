import { instance } from 'utils/axios';
import { SuccessResponse } from 'data/shared/Response';
import { authTokenFromMap, AuthTokenModel } from 'data/models/AuthTokenModel';
import { userFromMap, UserModel } from 'data/models/UserModel';

export interface AuthRegisterParams {
  name?: string;
  email?: string;
  password?: string;
  lastname?: string;
  dateOfBirth?: string;
}

export interface AuthLoginParams {
  email?: string;
  password?: string;
}

export interface AuthForgotPasswordParams {
  email: string;
}

export interface AuthResetPasswordParams {
  token: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUpdateUserParams {
  name?: string;
  lastname?: string;
}

export const authRegister = async (params: AuthRegisterParams) =>
  await instance()
    .post('auth/register', params)
    .then((res): SuccessResponse<AuthTokenModel> => {
      res.data.body = authTokenFromMap(res.data.body);
      return res.data;
    });

export const authLogin = async (params: AuthLoginParams) =>
  await instance()
    .post('auth/login', params)
    .then((res): SuccessResponse<AuthTokenModel> => {
      res.data.body = authTokenFromMap(res.data.body);
      return res.data;
    });

export const authSelf = async () =>
  await instance({ auth: true })
    .get('auth/self')
    .then((res): SuccessResponse<UserModel> => {
      res.data.body = userFromMap(res.data.body);
      return res.data;
    });

export const authForgotPassword = async (params: AuthForgotPasswordParams) =>
  await instance()
    .post('auth/forgot-password', params)
    .then((res): SuccessResponse<string> => {
      return res.data;
    });

export const authResetPassword = async (params: AuthResetPasswordParams) =>
  await instance({ auth: true })
    .post(`auth/reset-password?token=${params.token}`, {
      ...params,
      password_confirmation: params.confirmPassword,
    })
    .then((res): SuccessResponse<string> => {
      return res.data;
    });

export const authUpdateUser = async (params: AuthUpdateUserParams) =>
  await instance({ auth: true })
    .put('auth/users', params)
    .then((res): SuccessResponse<UserModel> => {
      res.data.body = userFromMap(res.data.body);
      return res.data;
    });
