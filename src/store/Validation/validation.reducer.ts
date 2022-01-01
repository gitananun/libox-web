import { ValidationErrors } from './../../components/interfaces/Shared';
import { VALIDATION_REJECT, VALIDATION_RESOLVE } from './validation.types';
import { ReduxAction } from 'components/interfaces/Redux';

interface StateInterface {
  errors: ValidationErrors;
}

const INITIAL_STATE: StateInterface = {
  errors: {},
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case VALIDATION_REJECT:
      return {
        ...state,
        errors: action.payload,
      };
    case VALIDATION_RESOLVE:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};

export default reducer;
