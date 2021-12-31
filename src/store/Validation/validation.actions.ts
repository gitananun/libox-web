import { ValidationErrors } from './../../components/interfaces/Shared';
import { ReduxAction } from '../../components/interfaces/Redux';
import { REJECT, RESOLVE } from './validation.types';

export const rejectValidation = (errors: ValidationErrors): ReduxAction => ({
  type: REJECT,
  payload: errors,
});

export const resolveValidation = (): ReduxAction => ({
  type: RESOLVE,
});
