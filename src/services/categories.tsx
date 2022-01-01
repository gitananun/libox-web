import { instance } from 'utils/axios';
import { PaginatedResponse } from 'data/shared/Response';
import { categoryFromMap, CategoryModel } from 'data/models/CategoryModel';

export const fetchCategories = async () =>
  await instance()
    .get('categories')
    .then((res): PaginatedResponse<CategoryModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => categoryFromMap(e));
      return res.data.body;
    });
