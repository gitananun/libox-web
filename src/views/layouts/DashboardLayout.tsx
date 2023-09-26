import { authLogoutAction } from 'actions/auth';
import DashboardSettingsModal from 'components/dashboard/DashboardSettingsModal';
import DashboardEditCourseModal from 'components/dashboard/modals/DashboardEditCourseModal';
import DashboardHeader from 'components/layouts/DashboardHeader';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
import EmailNotVerifiedModal from 'components/shared/EmailNotVerifiedModal';
import NotificationsModal from 'components/shared/NotificationsModal';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layouts/Navbar';

const DashboardLayout = (props: any) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authLogoutAction();
    navigate('/');
  };

  return (
    <div className='dashboard'>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <DashboardHeader onLogout={onLogout} />
      {props.children}
      <NotificationsModal />
      <DashboardSettingsModal />
      <EmailNotVerifiedModal />

      <DashboardEditCourseModal />
    </div>
  );
};

export default DashboardLayout;
