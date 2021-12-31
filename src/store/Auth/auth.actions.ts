import { UserModel } from './../../data/models/UserModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { LOGIN, LOGOUT } from './auth.types';

export const login = (user: UserModel): ReduxAction => ({
  type: LOGIN,
  payload: user,
});

export const logout = (): ReduxAction => ({
  type: LOGOUT,
});
