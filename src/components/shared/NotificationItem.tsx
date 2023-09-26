import CircularIcon from 'components/common/CircularIcon';
import { NotificationModel } from 'data/models/NotificationModel';

interface Props {
  notification: NotificationModel;
  onRead: React.MouseEventHandler<HTMLButtonElement>;
}

const NotificationItem = (props: Props) => {
  return (
    <div className='notification'>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            {!props.notification.readAt && (
              <div className='col-1'>
                <span className='indicator'></span>
              </div>
            )}
            <div className='col'>
              <p className='text'>{props.notification.title}</p>
              <p className='timestamp'>{new Date(props.notification.createdAt).toUTCString()}</p>
            </div>
          </div>
        </div>
        {!props.notification.readAt && (
          <div className='col-4 d-flex align-items-center justify-content-end'>
            <button onClick={props.onRead} className='btn'>
              <CircularIcon iconClassName='fal fa-eye' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
