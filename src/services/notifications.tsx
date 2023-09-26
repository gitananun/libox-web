import { instance } from 'utils/axios';
import { PaginatedResponse, SuccessResponse } from 'data/shared/Response';
import { notificationFromMap, NotificationModel } from 'data/models/NotificationModel';

export interface ReadNotificationParams {
  id: string;
}

export const fetchNotifications = async () =>
  await instance({ auth: true })
    .get('auth/users/notifications')
    .then((res): PaginatedResponse<NotificationModel> => {
      res.data.body.items = res.data.body.items.map((e: any) => notificationFromMap(e));
      return res.data.body;
    });

export const readNotification = async (params: ReadNotificationParams) =>
  await instance({ auth: true })
    .get(`auth/users/notifications/${params.id}`)
    .then((res): SuccessResponse<string> => {
      return res.data;
    });

export const readNotifications = async () =>
  await instance({ auth: true })
    .put('auth/users/notifications')
    .then((res): SuccessResponse<string> => {
      return res.data;
    });
