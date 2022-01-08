import { instance } from 'utils/axios';
import { PaginatedResponse } from 'data/shared/Response';
import { categoryFromMap, CategoryModel } from 'data/models/CategoryModel';
import { courseFromMap, CourseModel } from 'data/models/CourseModel';

export interface FetchCategoryCoursesParams {
  slug: string;
}

export const fetchCategories = async () =>
  await instance()
    .get('categories')
    .then((res): PaginatedResponse<CategoryModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => categoryFromMap(e));
      return res.data.body;
    });

export const fetchCategoryCourses = async (params: FetchCategoryCoursesParams) =>
  await instance()
    .get(`categories/${params.slug}`)
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });
