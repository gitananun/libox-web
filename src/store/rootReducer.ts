import { combineReducers } from 'redux';

import authReducer from '../store/Auth/auth.reducer';
import courseReducer from '../store/Course/course.reducer';
import coursesReducer from '../store/Courses/courses.reducer';
import categoriesReducer from '../store/Categories/categories.reducer';
import validationReducer from '../store/Validation/validation.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  courses: coursesReducer,
  categories: categoriesReducer,
  validation: validationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
