import { instance } from 'utils/axios';
import { SuccessResponse } from 'data/shared/Response';
import { authTokenFromMap, AuthTokenModel } from 'data/models/AuthTokenModel';
import { onValidationRejected } from 'utils/api';

export interface AuthRegisterParams {
  name: string;
  email: string;
  lastname: string;
  password: string;
  dateOfBirth?: string;
}

export const authRegister = async (params: AuthRegisterParams) =>
  await instance()
    .post('auth/register', params)
    .then((res): SuccessResponse<AuthTokenModel> => {
      res.data.body = authTokenFromMap(res.data.body);
      return res.data;
    })
    .catch(onValidationRejected);
