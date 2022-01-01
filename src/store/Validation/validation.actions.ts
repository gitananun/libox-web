import { ValidationErrors } from './../../components/interfaces/Shared';
import { ReduxAction } from '../../components/interfaces/Redux';
import { VALIDATION_REJECT, VALIDATION_RESOLVE } from './validation.types';

export const rejectValidationAction = (errors: ValidationErrors): ReduxAction => ({
  type: VALIDATION_REJECT,
  payload: errors,
});

export const resolveValidationAction = (): ReduxAction => ({
  type: VALIDATION_RESOLVE,
});
