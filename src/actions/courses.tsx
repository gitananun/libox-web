import { ReduxAction } from 'components/interfaces/Redux';
import { fetchCourses, FetchCoursesParams, searchCourses, SearchCoursesParams } from 'services/courses';
import { fetchCoursesStateAction } from 'store/Courses/courses.actions';
import store from 'store/store';

const { dispatch } = store;

export const fetchCoursesAction = async (params?: FetchCoursesParams): Promise<ReduxAction> => {
  return fetchCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};

export const searchCoursesAction = async (params?: SearchCoursesParams): Promise<ReduxAction> => {
  return searchCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};
