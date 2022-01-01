import DashboardHeader from 'components/layouts/DashboardHeader';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
import Navbar from '../../components/layouts/Navbar';

const DashboardLayout = (props: any) => {
  return (
    <div className='dashboard'>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <DashboardHeader />
      {props.children}
    </div>
  );
};

export default DashboardLayout;
