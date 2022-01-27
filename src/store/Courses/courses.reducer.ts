import { PaginatedPayload } from './../../components/interfaces/Redux';
import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_COURSES, ADD_COURSE } from './courses.types';

interface StateInterface {
  lastPage: number;
  currentPage: number;
  courses: CourseModel[];
}

const INITIAL_STATE: StateInterface = {
  courses: [],
  lastPage: 0,
  currentPage: 0,
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_COURSES:
      const payload: PaginatedPayload<CourseModel> = action.payload;
      return {
        ...state,
        courses: payload.items,
        lastPage: payload.lastPage,
        currentPage: payload.currentPage,
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
