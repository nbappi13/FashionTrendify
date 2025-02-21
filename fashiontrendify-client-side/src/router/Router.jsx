import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<div>Wishlist Page</div>} /> 
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;