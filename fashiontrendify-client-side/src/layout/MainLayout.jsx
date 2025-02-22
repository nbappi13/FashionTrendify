import React from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
