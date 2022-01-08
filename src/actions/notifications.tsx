import { ReduxAction } from 'components/interfaces/Redux';
import {
  fetchNotifications,
  readNotification,
  ReadNotificationParams,
  readNotifications,
} from 'services/notifications';
import {
  fetchNotificationsStateAction,
  readNotificationsStateAction,
  readNotificationStateAction,
} from 'store/Notifications/notifications.actions';
import store from 'store/store';

const { dispatch } = store;

export const fetchNotificationsAction = async (): Promise<ReduxAction> => {
  return fetchNotifications().then((data) => dispatch(fetchNotificationsStateAction(data.items)));
};

export const readNotificationAction = async (params: ReadNotificationParams): Promise<ReduxAction> => {
  return readNotification(params).then(() => dispatch(readNotificationStateAction(params.id)));
};

export const readNotificationsAction = async (): Promise<ReduxAction> => {
  return readNotifications().then(() => dispatch(readNotificationsStateAction()));
};
