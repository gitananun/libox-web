import { NotificationModel } from './../../data/models/NotificationModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_NOTIFICATIONS, READ_NOTIFICATION } from './notifications.types';

export const fetchNotificationsAction = (notificaitons: NotificationModel[]): ReduxAction => ({
  type: FETCH_NOTIFICATIONS,
  payload: notificaitons,
});

export const readNotificationAction = (id: string): ReduxAction => ({
  type: READ_NOTIFICATION,
  payload: id,
});
