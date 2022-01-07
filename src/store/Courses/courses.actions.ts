import { PaginatedPayload } from './../../components/interfaces/Redux';
import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_COURSES, FETCH_POPULAR_COURSES } from './courses.types';

export const fetchCoursesAction = (payload: PaginatedPayload<CourseModel>): ReduxAction => ({
  type: FETCH_COURSES,
  payload: payload,
});

export const fetchPopularCoursesAction = (courses: CourseModel[]): ReduxAction => ({
  type: FETCH_POPULAR_COURSES,
  payload: courses,
});
