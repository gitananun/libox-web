import { badgeFromMap, BadgeModel } from 'data/models/BadgeModel';
import { SuccessResponse } from 'data/shared/Response';
import { instance } from 'utils/axios';

export const fetchBadges = async () =>
  await instance()
    .get('badges')
    .then((res): SuccessResponse<BadgeModel[]> => {
      res.data.body = res.data.body.map((e: any) => badgeFromMap(e));
      return res.data;
    });
