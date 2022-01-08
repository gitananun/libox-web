import { NotificationModel } from './../../data/models/NotificationModel';
import { ReduxAction } from '../../components/interfaces/Redux';
import { FETCH_NOTIFICATIONS, READ_NOTIFICATION, READ_NOTIFICATIONS } from './notifications.types';

export const fetchNotificationsStateAction = (notificaitons: NotificationModel[]): ReduxAction => ({
  type: FETCH_NOTIFICATIONS,
  payload: notificaitons,
});

export const readNotificationStateAction = (id: string): ReduxAction => ({
  type: READ_NOTIFICATION,
  payload: id,
});

export const readNotificationsStateAction = (): ReduxAction => ({
  type: READ_NOTIFICATIONS,
});
