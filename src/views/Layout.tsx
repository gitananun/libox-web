import Footer from 'components/layouts/Footer';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
import ScrollTopBtn from 'components/layouts/ScrollTopBtn';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';

const Layout = (props: any) => {
  return (
    <>
      <ScrollTopBtn />
      <HeaderWrapper>
        <Header />
        <Navbar />
      </HeaderWrapper>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
