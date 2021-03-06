import DashboardAccountTab from 'components/dashboard/tabs/DashboardAccountTab';
import DashboardHelpTab from 'components/dashboard/tabs/DashboardHelpTab';
import DashboardNavTabs from 'components/dashboard/DashboardNavTabs';
import DashboardPasswordTab from 'components/dashboard/tabs/DashboardPasswordTab';
import DashboardLayout from './layouts/DashboardLayout';
import { useEffect } from 'react';
import { authSelfAction } from 'actions/auth';
import DashboardCoursesTab from 'components/dashboard/tabs/DashboardCoursesTab';
import DashboardMyLibraryTab from 'components/dashboard/tabs/DashboardMyLibraryTab';

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
              <DashboardCoursesTab />
              <DashboardMyLibraryTab />
              <DashboardAccountTab />
              <DashboardPasswordTab />
              <DashboardHelpTab />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
