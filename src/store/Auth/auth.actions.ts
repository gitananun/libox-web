import { UserModel } from './../../data/models/UserModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { LOGIN, LOGOUT } from './auth.types';

export const loginAction = (user: UserModel): ReduxAction => ({
  type: LOGIN,
  payload: user,
});

export const logoutAction = (): ReduxAction => ({
  type: LOGOUT,
});
