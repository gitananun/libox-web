import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_BADGES } from './badges.types';
import { BadgeModel } from 'data/models/BadgeModel';

interface StateInterface {
  badges: BadgeModel[];
}

const INITIAL_STATE: StateInterface = {
  badges: [],
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_BADGES:
      return {
        ...state,
        badges: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
