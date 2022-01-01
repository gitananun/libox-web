import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH } from './course.types';

export const fetch = (course: CourseModel): ReduxAction => ({
  type: FETCH,
  payload: course,
});
