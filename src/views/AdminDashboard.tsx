import AdminDashboardNavTabs from 'components/dashboard/admin/AdminDashboardNavTabs';
import DashboardSettingsModal from 'components/dashboard/DashboardSettingsModal';
import DashboardAccountTab from 'components/dashboard/tabs/DashboardAccountTab';
import DashboardCoursesTab from 'components/dashboard/tabs/DashboardCoursesTab';
import DashboardHelpTab from 'components/dashboard/tabs/DashboardHelpTab';
import DashboardPasswordTab from 'components/dashboard/tabs/DashboardPasswordTab';
import NotificationsModal from 'components/shared/NotificationsModal';
import DashboardLayout from './layouts/DashboardLayout';

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='alert alert-primary text-light mb-5'>Your are admin</div>
          </div>
          <div className='col-12 col-lg-2'>
            <AdminDashboardNavTabs />
          </div>
          <div className='col-12 col-lg-10'>
            <div className='tab-content mb-5 h-100'>
              <DashboardAccountTab />
              <DashboardPasswordTab />
              <DashboardCoursesTab />
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

export default AdminDashboard;
