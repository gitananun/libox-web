import DashboardAccountTab from 'components/dashboard/DashboardAccountTab';
import DashboardHelpTab from 'components/dashboard/DashboardHelpTab';
import DashboardNavTabs from 'components/dashboard/DashboardNavTabs';
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
              <DashboardHelpTab />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
