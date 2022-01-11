import { ReduxAction } from 'components/interfaces/Redux';
import { StoreCourseBody } from 'components/interfaces/Services';
import { CourseModel } from 'data/models/CourseModel';
import { SuccessResponse } from 'data/shared/Response';
import {
  fetchCourse,
  fetchCourses,
  FetchCoursesParams,
  SearchCourseParams,
  searchCourses,
  SearchCoursesParams,
  storeCourse,
} from 'services/courses';
import { fetchCourseStateAction } from 'store/Course/course.actions';
import { fetchCoursesStateAction } from 'store/Courses/courses.actions';
import store from 'store/store';

const { dispatch } = store;

export const fetchCoursesAction = async (params?: FetchCoursesParams): Promise<ReduxAction> => {
  return fetchCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};

export const searchCoursesAction = async (params?: SearchCoursesParams): Promise<ReduxAction> => {
  return searchCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};

export const fetchCourseAction = async (params: SearchCourseParams): Promise<ReduxAction> => {
  return fetchCourse(params).then((data) => dispatch(fetchCourseStateAction(data.body)));
};

export const storeCourseAction = async (body: Partial<StoreCourseBody>): Promise<SuccessResponse<CourseModel>> => {
  return storeCourse(body);
};
