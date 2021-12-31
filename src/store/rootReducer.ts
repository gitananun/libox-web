import { combineReducers } from 'redux';

import validationReducer from '../store/Validation/validation.reducer';
import authReducer from '../store/Auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  validation: validationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
