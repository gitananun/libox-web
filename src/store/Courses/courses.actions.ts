import { PaginatedPayload } from './../../components/interfaces/Redux';
import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_COURSES } from './courses.types';

export const fetchCoursesStateAction = (payload: PaginatedPayload<CourseModel>): ReduxAction => ({
  type: FETCH_COURSES,
  payload: payload,
});
