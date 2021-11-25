import HeaderWrapper from 'components/layouts/HeaderWrapper';
import React from 'react';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';

const Layout = (props: any) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        <Navbar />
      </HeaderWrapper>
      {props.children}
    </>
  );
};

export default Layout;
