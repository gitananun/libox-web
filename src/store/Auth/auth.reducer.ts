import { UserModel } from './../../data/models/UserModel';
import { ReduxAction } from 'components/interfaces/Redux';
import { LOGIN, LOGOUT } from './auth.types';

interface StateInterface {
  user?: UserModel;
}

const INITIAL_STATE: StateInterface = {};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
