import { PaginatedPayload } from './../../components/interfaces/Redux';
import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { ADD_COURSE, FETCH_COURSES } from './courses.types';

export const fetchCoursesStateAction = (payload: PaginatedPayload<CourseModel>): ReduxAction => ({
  type: FETCH_COURSES,
  payload: payload,
});

export const addCourseStateAction = (payload: CourseModel): ReduxAction => ({
  type: ADD_COURSE,
  payload: payload,
});
