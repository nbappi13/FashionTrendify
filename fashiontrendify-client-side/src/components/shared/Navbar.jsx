import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'; 
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">

        <div className="flex items-center space-x-2">
          <img src={logo} alt="FashionTrendify Logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold brand-name">
            <Link to="/" className="hover:text-yellow-500">FashionTrendify</Link>
          </span>
        </div>
    
        <div className="hidden md:flex items-center space-x-4 justify-center">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/products" className="hover:text-yellow-500">Products</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
          <input
            type="text"
            placeholder="Search for products, brands and more"
     
            className="input input-bordered input-primary w-full max-w-xs md:max-w-md mx-4"
          />
        </div>
    
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link to="/cart" className="hover:text-yellow-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.09 2M7 13l1-7h12.78L21 11H7.21zM5 22h12a2 2 0 002-2V7H3v15a2 2 0 002 2z"></path>
              <circle cx="9" cy="21" r="1.5" fill="currentColor"></circle>
              <circle cx="19" cy="21" r="1.5" fill="currentColor"></circle>
            </svg>
          </Link>
          <Link to="/wishlist" className="hover:text-yellow-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </Link>
       
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
 
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500">Home</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500">Products</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;