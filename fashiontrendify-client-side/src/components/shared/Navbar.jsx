import React from 'react';
import '../../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content shadow-lg">
      <div className="navbar-container container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold navbar-brand">
            <a href="/" className="hover:text-secondary">FashionTrendify</a>
          </div>
          <div className="hidden md:flex navbar-items space-x-4">
            <a href="/" className="navbar-item hover:text-secondary">Home</a>
            <a href="/products" className="navbar-item hover:text-secondary">Products</a>
            <a href="/contact" className="navbar-item hover:text-secondary">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="navbar-toggle focus:outline-none" aria-label="Toggle navigation">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
