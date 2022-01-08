import { ReduxAction } from 'components/interfaces/Redux';
import { fetchCategories, fetchCategoryCourses, FetchCategoryCoursesParams } from 'services/categories';
import { fetchCategoriesStateAction } from 'store/Categories/categories.actions';
import { fetchCoursesStateAction } from 'store/Courses/courses.actions';
import store from 'store/store';

const { dispatch } = store;

export const fetchCategoriesAction = async (): Promise<ReduxAction> => {
  return fetchCategories().then((data) => dispatch(fetchCategoriesStateAction(data.items)));
};

export const fetchCategoryCoursesAction = async (params: FetchCategoryCoursesParams): Promise<ReduxAction> => {
  return fetchCategoryCourses(params).then((data) => dispatch(fetchCoursesStateAction(data)));
};
