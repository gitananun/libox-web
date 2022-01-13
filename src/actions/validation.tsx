import store from 'store/store';
import { removeValidationStateAction } from 'store/Validation/validation.actions';

const { dispatch } = store;

export const removeValidationAction = (name: string) => dispatch(removeValidationStateAction(name));
