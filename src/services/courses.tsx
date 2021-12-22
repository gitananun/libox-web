import { ApiInstance } from 'utils/axios';
import { PaginatedResponse } from 'data/shared/Response';
import { Course, courseFromMap } from 'data/models/Course';

export const fetchCourses = async (token?: string) =>
  await ApiInstance()
    .get('courses')
    .then((res): PaginatedResponse<Course> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });
