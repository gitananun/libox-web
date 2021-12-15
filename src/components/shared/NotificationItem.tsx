import CircularIcon from 'components/common/CircularIcon';

const NotificationItem = () => {
  return (
    <div className='notification'>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-1'>
              <span className='indicator'></span>
            </div>
            <div className='col'>
              <p className='text'>Your password has been changed successfully.</p>
              <p className='timestamp'>Jul 23, 2021 at 09:15 AM</p>
            </div>
          </div>
        </div>
        <div className='col-4 d-flex align-items-center justify-content-end'>
          <CircularIcon iconClassName='fal fa-lock' />
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
