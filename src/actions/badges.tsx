import { ReduxAction } from 'components/interfaces/Redux';
import { fetchBadges } from 'services/badges';
import { fetchBadgesStateAction } from 'store/Badges/badges.actions';
import store from 'store/store';

const { dispatch } = store;

export const fetchBadgesAction = async (): Promise<ReduxAction> => {
  return fetchBadges().then((data) => dispatch(fetchBadgesStateAction(data.body)));
};
