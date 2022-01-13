import { ValidationErrors } from './../../components/interfaces/Shared';
import { ReduxAction } from '../../components/interfaces/Redux';
import { VALIDATION_REJECT, VALIDATION_RESOLVE, VALIDATION_REMOVE } from './validation.types';

export const rejectValidationStateAction = (errors: ValidationErrors): ReduxAction => ({
  type: VALIDATION_REJECT,
  payload: errors,
});

export const removeValidationStateAction = (name: string): ReduxAction => ({
  type: VALIDATION_REMOVE,
  payload: name,
});

export const resolveValidationStateAction = (): ReduxAction => ({
  type: VALIDATION_RESOLVE,
});
