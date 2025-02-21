import React from 'react';
import Navbar from '../components/shared/Navbar';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>

    </div>
  );
};

export default MainLayout;