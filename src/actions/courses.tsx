import { ReduxAction } from 'components/interfaces/Redux';
import {
  fetchCourse,
  fetchCourses,
  FetchCoursesParams,
  SearchCourseParams,
  searchCourses,
  SearchCoursesParams,
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
