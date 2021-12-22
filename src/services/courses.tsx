import { instance } from 'utils/axios';
import { PaginatedResponse, SuccessResponse } from 'data/shared/Response';
import { CourseModel, courseFromMap } from 'data/models/CourseModel';

export const fetchCourses = async () =>
  await instance()
    .get('courses')
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });

export const fetchCourse = async (slug: string) =>
  await instance()
    .get(`courses/${slug}`)
    .then((res): SuccessResponse<CourseModel> => {
      res.data.body = courseFromMap(res.data.body);
      return res.data;
    });
