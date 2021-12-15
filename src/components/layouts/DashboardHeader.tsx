import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import DashboardHeaderUser from 'components/dashboard/DashboardHeaderUser';

const DashboardHeader = () => {
  return (
    <div className='container dashboard-header mb-4'>
      <div className='row'>
        <div className='col'>
          <DashboardHeaderUser />
        </div>
        <div className='col d-flex align-items-center icons justify-content-end gap-4'>
          <i className='fal fa-bell' data-toggle='modal' data-target='#notifications-modal'></i>
          <span className='divider'>|</span>
          <i className='fal fa-cog'></i>
          <RoundedPrimaryButton title='Logout' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
