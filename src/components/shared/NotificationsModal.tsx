import Modal from 'components/shared/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchNotifications, readNotification } from 'services/notifications';
import { fetchNotificationsAction, readNotificationAction } from 'store/Notifications/notifications.actions';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import NotificationItem from './NotificationItem';

const NotificationsModal = () => {
  const { dispatch } = store;
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    fetchNotifications().then((data) => dispatch(fetchNotificationsAction(data.items)));
  }, [dispatch]);

  const onRead = (id: string) => {
    readNotification(id).then(() => dispatch(readNotificationAction(id)));
  };

  return (
    <Modal
      id='notifications-modal'
      title='Notifications'
      footerChildren={<p className='footer-text'>View all notifications</p>}
    >
      {state.notifications.notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} onRead={() => onRead(n.id)} />
      ))}
    </Modal>
  );
};

export default NotificationsModal;
