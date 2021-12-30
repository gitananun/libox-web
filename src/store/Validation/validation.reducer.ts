import { ValidationError } from './../../components/interfaces/Shared';
import { REJECT, RESOLVE } from './validation.types';
import { ReduxAction } from 'components/interfaces/Redux';

interface StateInterface {
  errors: ValidationError[];
}

const INITIAL_STATE: StateInterface = {
  errors: [],
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case REJECT:
      return {
        ...state,
        errors: action.payload,
      };
    case RESOLVE:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};

export default reducer;
