// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} className='h-12 mr-5 rounded-full'/>
            <Link to="/" className="text-white text-2xl font-bold">Tidal Waves Tech</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/" className="text-white hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/" className="text-white hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/" className="text-white hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
