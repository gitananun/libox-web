export interface SuccessResponse<T> {
  success: boolean;
  message?: string;
  body: T;
}

export interface PaginatedResponse<T> {
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
  items: T[];
}
