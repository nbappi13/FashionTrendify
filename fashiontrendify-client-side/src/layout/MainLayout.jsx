import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      <Footer/>

    </div>
  );
};

export default MainLayout;