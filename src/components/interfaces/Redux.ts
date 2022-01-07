export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface PaginatedPayload<T> {
  items: T[];
  lastPage: number;
  currentPage: number;
}
