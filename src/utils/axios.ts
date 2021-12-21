import axios, { AxiosInstance } from 'axios';

export const ApiInstance = (token?: string): AxiosInstance =>
  axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
