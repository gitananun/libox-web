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
