import { instance } from 'utils/axios';
import { PaginatedResponse, SuccessResponse } from 'data/shared/Response';
import { CourseModel, courseFromMap } from 'data/models/CourseModel';
import { StoreCourseBody } from 'components/interfaces/Services';

export interface FetchCoursesParams {
  scope?: string;
  page?: string | null;
}
export interface SearchCoursesParams {
  title: string;
  category?: string | null;
}

export interface SearchCourseParams {
  slug: string;
}

const getStoreFormData = (body: Partial<StoreCourseBody>) => {
  const formData = new FormData();

  if (!body.categories) body.categories = [];
  if (!body.instructors) body.instructors = [];

  for (const i in body) {
    const key = i as keyof StoreCourseBody;

    if (Array.isArray(body[key])) body[key].forEach((id: any) => formData.append(`${i}[]`, `${id}`));
    else formData.append(i, body[key]);
  }

  if (body.badge) formData.append('badge_id', body.badge.toString());

  return formData;
};

export const fetchCourses = async (params?: FetchCoursesParams) =>
  await instance()
    .get(`courses?page=${params?.page}&scope=${params?.scope ?? ''}`)
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });

export const searchCourses = async (params?: SearchCoursesParams) =>
  await instance()
    .post(`courses/search/${params?.title}`, { category: params?.category })
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });

export const fetchCourse = async (params: SearchCourseParams) =>
  await instance()
    .get(`courses/${params.slug}`)
    .then((res): SuccessResponse<CourseModel> => {
      res.data.body = courseFromMap(res.data.body);
      return res.data;
    });

export const storeCourse = async (body: Partial<StoreCourseBody>) =>
  await instance({ auth: true })
    .post('auth/courses', getStoreFormData(body), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res): SuccessResponse<CourseModel> => {
      res.data.body = courseFromMap(res.data.body);
      return res.data;
    });

export const updateCourse = async (id: number, body: Partial<StoreCourseBody>) =>
  await instance({ auth: true })
    .put(`auth/courses/${id}`, getStoreFormData(body), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res): SuccessResponse<CourseModel> => {
      res.data.body = courseFromMap(res.data.body);
      return res.data;
    });

export const fetchSelfCourses = async (params?: FetchCoursesParams) =>
  await instance({ auth: true })
    .get(`/auth/courses?page=${params?.page}`)
    .then((res): PaginatedResponse<CourseModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => courseFromMap(e));
      return res.data.body;
    });
