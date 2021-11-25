import HeaderWrapper from 'components/layouts/HeaderWrapper';
import ScrollToTopBtn from 'components/layouts/ScrollToTopBtn';
import React from 'react';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';

const Layout = (props: any) => {
  return (
    <>
      <ScrollToTopBtn />
      <HeaderWrapper>
        <Header />
        <Navbar />
      </HeaderWrapper>
      {props.children}
    </>
  );
};

export default Layout;
