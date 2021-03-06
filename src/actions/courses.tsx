import { ReduxAction } from 'components/interfaces/Redux';
import { StoreCourseBody } from 'components/interfaces/Services';

import {
  fetchCourse,
  fetchCourses,
  FetchCoursesParams,
  fetchSelfCourses,
  SearchCourseParams,
  searchCourses,
  SearchCoursesParams,
  storeCourse,
  updateCourse,
} from 'services/courses';
import { fetchCourseStateAction } from 'store/Course/course.actions';
import { addCourseStateAction, fetchCoursesStateAction, updateCourseStateAction } from 'store/Courses/courses.actions';
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

export const storeCourseAction = async (body: Partial<StoreCourseBody>): Promise<ReduxAction> => {
  return storeCourse(body).then((data) => dispatch(addCourseStateAction(data.body)));
};

export const updateCourseAction = async (id: number, body: Partial<StoreCourseBody>): Promise<ReduxAction> => {
  return updateCourse(id, body).then((data) => dispatch(updateCourseStateAction(data.body)));
};

export const fetchSelfCoursesAction = async (params?: FetchCoursesParams): Promise<ReduxAction> => {
  return fetchSelfCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};
