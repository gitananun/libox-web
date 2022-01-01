import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_COURSES } from './courses.types';

export const fetchCoursesAction = (courses: CourseModel[]): ReduxAction => ({
  type: FETCH_COURSES,
  payload: courses,
});
