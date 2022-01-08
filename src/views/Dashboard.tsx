import DashboardAccountTab from 'components/dashboard/tabs/DashboardAccountTab';
import DashboardHelpTab from 'components/dashboard/tabs/DashboardHelpTab';
import DashboardNavTabs from 'components/dashboard/DashboardNavTabs';
import DashboardPasswordTab from 'components/dashboard/tabs/DashboardPasswordTab';
import DashboardSettingsModal from 'components/dashboard/DashboardSettingsModal';
import NotificationsModal from 'components/shared/NotificationsModal';
import DashboardLayout from './layouts/DashboardLayout';
import { useEffect } from 'react';
import { authSelf } from 'services/auth';
import store from 'store/store';
import { loginStateAction } from 'store/Auth/auth.actions';

const Dashboard = () => {
  const { dispatch } = store;

  useEffect(() => {
    authSelf().then((data) => dispatch(loginStateAction(data.body)));
  }, [dispatch]);

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
