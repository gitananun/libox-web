import Modal from 'components/shared/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchNotifications, readNotification, readNotifications } from 'services/notifications';
import {
  fetchNotificationsStateAction,
  readNotificationStateAction,
  readNotificationsStateAction,
} from 'store/Notifications/notifications.actions';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import NotificationItem from './NotificationItem';

const NotificationsModal = () => {
  const { dispatch } = store;
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    fetchNotifications().then((data) => dispatch(fetchNotificationsStateAction(data.items)));
  }, [dispatch]);

  const onRead = (id: string) => {
    readNotification(id).then(() => dispatch(readNotificationStateAction(id)));
  };

  const onReadAll = () => {
    readNotifications().then(() => dispatch(readNotificationsStateAction()));
  };

  return (
    <Modal
      id='notifications-modal'
      title='Notifications'
      footerChildren={
        <p className='footer-text' onClick={onReadAll}>
          Read all notifications
        </p>
      }
    >
      {state.notifications.notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} onRead={() => onRead(n.id)} />
      ))}
    </Modal>
  );
};

export default NotificationsModal;
