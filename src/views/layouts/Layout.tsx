import Footer from 'components/layouts/Footer';
import HeaderWrapper from 'components/layouts/HeaderWrapper';
import Header from '../../components/layouts/Header';
import Navbar from '../../components/layouts/Navbar';

const Layout = (props: any) => {
  return (
    <>
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
