import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_COURSES, FETCH_POPULAR_COURSES } from './courses.types';

interface StateInterface {
  courses: CourseModel[];
  popular: CourseModel[];
}

const INITIAL_STATE: StateInterface = {
  courses: [],
  popular: [],
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_POPULAR_COURSES:
      return {
        ...state,
        popular: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
