import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_CATEGORIES } from './categories.types';
import { CategoryModel } from 'data/models/CategoryModel';

export const fetchCategoriesStateAction = (categories: CategoryModel[]): ReduxAction => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});
