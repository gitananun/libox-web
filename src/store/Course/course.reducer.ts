import { CourseModel } from './../../data/models/CourseModel';
import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_COURSE } from './course.types';

interface StateInterface {
  course: Partial<CourseModel>;
}

const INITIAL_STATE: StateInterface = {
  course: {},
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
