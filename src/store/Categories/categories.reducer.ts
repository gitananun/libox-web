import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_CATEGORIES } from './categories.types';
import { CategoryModel } from 'data/models/CategoryModel';

interface StateInterface {
  categories: CategoryModel[];
}

const INITIAL_STATE: StateInterface = {
  categories: [],
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
