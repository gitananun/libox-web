import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import DashboardHeaderUser from 'components/dashboard/DashboardHeaderUser';

const DashboardHeader = () => {
  return (
    <div className='container dashboard-header mb-4'>
      <div className='row'>
        <div className='col mb-3 mb-md-0'>
          <DashboardHeaderUser />
        </div>
        <div className='col d-flex align-items-center icons justify-content-center justify-content-md-end  gap-4'>
          <i className='fal fa-bell' data-toggle='modal' data-target='#notifications-modal'></i>
          <span className='divider'>|</span>
          <i className='fal fa-cog' data-toggle='modal' data-target='#settings-modal'></i>
          <RoundedPrimaryButton title='Logout' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
