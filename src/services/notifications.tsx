import { instance } from 'utils/axios';
import { PaginatedResponse, SuccessResponse } from 'data/shared/Response';
import { notificationFromMap, NotificationModel } from 'data/models/NotificationModel';

export const fetchNotifications = async () =>
  await instance({ auth: true })
    .get('auth/users/notifications')
    .then((res): PaginatedResponse<NotificationModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => notificationFromMap(e));
      return res.data.body;
    });

export const readNotification = async (id: string) =>
  await instance({ auth: true })
    .get(`auth/users/notifications/${id}`)
    .then((res): SuccessResponse<string> => {
      console.log(res.data.body);
      return res.data;
    });
