import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_COURSE } from './course.types';

export const fetchCourseAction = (course: CourseModel): ReduxAction => ({
  type: FETCH_COURSE,
  payload: course,
});
