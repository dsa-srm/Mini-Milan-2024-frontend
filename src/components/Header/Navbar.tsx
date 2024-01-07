import React, { useState, useEffect } from 'react';
import Logo from '../../assets/react.svg'; // Import your logo here
import HamburgerIcon from '../../assets/hamburger.svg';
import CloseIcon from '../../assets/close.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonText, setButtonText] = useState('Buy Ticket!');

  useEffect(() => {
    // Check if user token exists in session storage
    const token = sessionStorage.getItem('userToken');
    setIsLoggedIn(!!token);
    setButtonText(token ? 'Dashboard' : 'Buy Ticket!');
  }, []);

  const handleButtonClick = () => {
    // Redirect based on login status
    if (isLoggedIn) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/signup';
    }
  };

  const navLink = (
    <a href="/home" className="text-white px-4 py-2 hover:bg-gray-700 rounded transition duration-300 ease-in-out hover:text-orange-500">
      FAQ
    </a>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent text-white p-4 px-10 lg:mb-32 flex justify-between items-center z-50">
      <img src={Logo} alt="Logo" className="h-16" />
      <div className="hidden md:flex items-center md:text-2xl">
        {navLink}
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded ml-4"
        >
          {buttonText}
        </button>
      </div>
      <div className="md:hidden z-10">
        <button onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : HamburgerIcon} alt={isMenuOpen ? 'Close' : 'Menu'} className="h-10 w-10" />
        </button>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-0 right-0 bottom-0 bg-gray-900 w-3/4 p-4 md:hidden h-screen justify-center max-md:pt-32 text-xl`}>
        <div className="text-center">
          {navLink}
          <button
            onClick={handleButtonClick}
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-8 w-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
