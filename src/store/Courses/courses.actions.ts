import { PaginatedPayload } from './../../components/interfaces/Redux';
import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { ADD_COURSE, FETCH_COURSES, UPDATE_COURSE } from './courses.types';

export const fetchCoursesStateAction = (payload: PaginatedPayload<CourseModel>): ReduxAction => ({
  type: FETCH_COURSES,
  payload: payload,
});

export const addCourseStateAction = (payload: CourseModel): ReduxAction => ({
  type: ADD_COURSE,
  payload: payload,
});

export const updateCourseStateAction = (payload: CourseModel): ReduxAction => ({
  type: UPDATE_COURSE,
  payload: payload,
});
