import { ApiInstance } from 'utils/axios';
import { PaginatedResponse } from 'data/shared/Response';
import { CourseModel, courseFromMap } from 'data/models/CourseModel';

export const fetchCourses = async (token?: string) =>
  await ApiInstance()
    .get('courses')
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });
