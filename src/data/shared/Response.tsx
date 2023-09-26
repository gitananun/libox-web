export interface SuccessResponse<T> {
  success: boolean;
  message?: string;
  body: T;
}

export interface PaginatedResponse<T> {
  perPage: number;
  lastPage: number;
  currentPage: number;
  items: T[];
}
