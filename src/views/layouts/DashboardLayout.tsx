import DashboardHeader from 'components/layouts/DashboardHeader';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
import ScrollTopBtn from 'components/layouts/ScrollTopBtn';
import Navbar from '../../components/layouts/Navbar';

const DashboardLayout = (props: any) => {
  return (
    <div className='dashboard'>
      <ScrollTopBtn />
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <DashboardHeader />
      {props.children}
    </div>
  );
};

export default DashboardLayout;
