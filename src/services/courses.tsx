import { instance } from 'utils/axios';
import { PaginatedResponse, SuccessResponse } from 'data/shared/Response';
import { CourseModel, courseFromMap } from 'data/models/CourseModel';

interface FetchCoursesParams {
  scope?: string;
  page?: string | null;
}
interface SearchCoursesParams {
  title: string;
  category?: string | null;
}

export const fetchCourses = async (params?: FetchCoursesParams) =>
  await instance()
    .get(`courses?page=${params?.page}&scope=${params?.scope ?? ''}`)
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });

export const searchCourses = async (params: SearchCoursesParams) =>
  await instance()
    .post(`courses/search/${params.title}`, { category: params.category })
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
