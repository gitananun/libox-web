import Modal from 'components/shared/Modal';
import NotificationItem from './NotificationItem';

const NotificationsModal = () => {
  return (
    <Modal
      id='notifications-modal'
      title='Notifications'
      footerChildren={<p className='footer-text'>View all notifications</p>}
    >
      {[1, 2, 3, 4].map(() => (
        <NotificationItem />
      ))}
    </Modal>
  );
};

export default NotificationsModal;
