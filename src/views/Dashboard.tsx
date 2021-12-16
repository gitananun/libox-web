import DashboardAccountTab from 'components/dashboard/DashboardAccountTab';
import DashboardHelpTab from 'components/dashboard/DashboardHelpTab';
import DashboardNavTabs from 'components/dashboard/DashboardNavTabs';
import DashboardPasswordTab from 'components/dashboard/DashboardPasswordTab';
import DashboardSettingsModal from 'components/dashboard/DashboardSettingsModal';
import NotificationsModal from 'components/shared/NotificationsModal';
import DashboardLayout from './layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <DashboardNavTabs />
          </div>
          <div className='col-10'>
            <div className='tab-content h-100'>
              <DashboardAccountTab />
              <DashboardPasswordTab />
              <DashboardHelpTab />
            </div>
          </div>
        </div>
      </div>
      <NotificationsModal />
      <DashboardSettingsModal />
    </DashboardLayout>
  );
};

export default Dashboard;
