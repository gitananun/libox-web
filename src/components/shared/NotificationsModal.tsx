import { fetchNotificationsAction, readNotificationAction, readNotificationsAction } from 'actions/notifications';
import Modal from 'components/shared/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import NotificationItem from './NotificationItem';

const NotificationsModal = () => {
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    fetchNotificationsAction();
  }, []);

  const onRead = (id: string) => readNotificationAction({ id });
  const onReadAll = () => readNotificationsAction();

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
