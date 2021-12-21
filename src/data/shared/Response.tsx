export interface SuccessResponse<T> {
  body: T;
}

export interface PaginatedResponse<T> {
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
  items: T[];
}
