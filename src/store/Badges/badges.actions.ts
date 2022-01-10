import { BadgeModel } from './../../data/models/BadgeModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_BADGES } from './badges.types';

export const fetchBadgesStateAction = (badges: BadgeModel[]): ReduxAction => ({
  type: FETCH_BADGES,
  payload: badges,
});
