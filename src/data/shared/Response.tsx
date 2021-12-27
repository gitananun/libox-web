export interface SuccessResponse<T> {
  success: boolean;
  body: T;
}

export interface PaginatedResponse<T> {
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
  items: T[];
}
