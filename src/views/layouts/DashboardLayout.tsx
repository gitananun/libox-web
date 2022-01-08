import { authLogoutAction } from 'actions/auth';
import DashboardHeader from 'components/layouts/DashboardHeader';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
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
    </div>
  );
};

export default DashboardLayout;
