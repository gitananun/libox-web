import { combineReducers } from 'redux';

import validationReducer from '../store/Validation/validation.reducer';

const rootReducer = combineReducers({
  validation: validationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
