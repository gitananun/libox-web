import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import DashboardHeaderUser from 'components/dashboard/DashboardHeaderUser';

const DashboardHeader = () => {
  return (
    <div className='container dashboard-header mb-4'>
      <div className='row'>
        <div className='col'>
          <DashboardHeaderUser />
        </div>
        <div className='col d-flex align-items-center justify-content-end gap-4'>
          <i className='fa fa-cog settings-icon'></i>
          <RoundedPrimaryButton title='Logout' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
