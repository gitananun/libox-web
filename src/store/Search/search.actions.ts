import { CourseModel } from '../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_SEARCH_COURSES } from './search.types';

export const fetchSearchCourses = (courses: CourseModel[]): ReduxAction => ({
  type: FETCH_SEARCH_COURSES,
  payload: courses,
});
