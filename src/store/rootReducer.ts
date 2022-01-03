import { combineReducers } from 'redux';

import authReducer from '../store/Auth/auth.reducer';
import searchReducer from '../store/Search/search.reducer';
import courseReducer from '../store/Course/course.reducer';
import coursesReducer from '../store/Courses/courses.reducer';
import categoriesReducer from '../store/Categories/categories.reducer';
import validationReducer from '../store/Validation/validation.reducer';
import notificationsReducer from '../store/Notifications/notifications.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  search: searchReducer,
  courses: coursesReducer,
  categories: categoriesReducer,
  validation: validationReducer,
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
