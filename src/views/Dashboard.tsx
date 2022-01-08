import DashboardAccountTab from 'components/dashboard/tabs/DashboardAccountTab';
import DashboardHelpTab from 'components/dashboard/tabs/DashboardHelpTab';
import DashboardNavTabs from 'components/dashboard/DashboardNavTabs';
import DashboardPasswordTab from 'components/dashboard/tabs/DashboardPasswordTab';
import DashboardSettingsModal from 'components/dashboard/DashboardSettingsModal';
import NotificationsModal from 'components/shared/NotificationsModal';
import DashboardLayout from './layouts/DashboardLayout';
import { useEffect } from 'react';
import { authSelfAction } from 'actions/auth';

const Dashboard = () => {
  useEffect(() => {
    authSelfAction();
  }, []);

  return (
    <DashboardLayout>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-2'>
            <DashboardNavTabs />
          </div>
          <div className='col-12 col-lg-10'>
            <div className='tab-content mb-5 h-100'>
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
