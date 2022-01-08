import { ReduxAction } from 'components/interfaces/Redux';
import { SuccessResponse } from 'data/shared/Response';
import {
  authForgotPassword,
  AuthForgotPasswordParams,
  authResetPassword,
  AuthResetPasswordParams,
  authSelf,
} from 'services/auth';
import { loginStateAction } from 'store/Auth/auth.actions';
import store from 'store/store';

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
