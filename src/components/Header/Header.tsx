import React, { useState } from 'react';
import useLogout from "@/features/Authentication/useLogout";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import hamburgerIcon from '../../assets/hamburger.svg'; // Import hamburger icon
import closeIcon from '../../assets/close.svg'; // Import close icon
import Logo from '../../assets/navLogo.png'; // Import your logo here

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading: logOutLoading, logout } = useLogout();
  // const isActive: string[] = location.pathname.split("/").filter(Boolean);
  const handleLogout = async () => {
    try {
      logout();
      localStorage.setItem("isAuth", "false");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isAuth: string = localStorage.getItem('isAuth') || 'false';

  return (
    <header className={`p-4 w-[100vw] fixed top-0 z-[997] headerContainer`}>
      <div className="flex gap-x-4 justify-between items-center relative z-[999]">
      <img src={Logo} alt="Logo" className=" h-12 lg:h-28" />
        
        <div className={`lg:flex hidden ${isSidebarOpen ? 'hidden' : ''}`}>
          {/* Navigation links for large screens */}
          <Button variant={'custom'} size={'custom'} onClick={() => navigate('/faq')}>
            FAQ
          </Button>
          {isAuth === 'true' ? (
            <>
              <Button variant={'custom'} size={'custom'} onClick={handleLogout} disabled={logOutLoading}>
                Logout
              </Button>
              <Button variant={'custom'} size={'custom'} onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
            </>
          ) : (
            <>
              <Button variant={'custom'} size={'custom'} onClick={() => navigate('/login')}>
                Login/signup
              </Button>
              <Button variant={'custom2'} size={'custom'} onClick={() => navigate('/signup')}>
                Buy Ticket
              </Button>
            </>
          )}
        </div>
        {/* Hamburger menu for medium and below devices */}
        <img
          className="lg:hidden cursor-pointer h-10 w-10"
          src={isSidebarOpen ? closeIcon : hamburgerIcon}
          alt="Menu"
          onClick={toggleSidebar}
        />  
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="  absolute top-0 right-0 bottom-0 bg-gray-900 w-3/4 md:w-2/4 p-4 lg:hidden h-screen justify-center max-md:pt-32 text-xl"> 
        {/* fixed top-0 left-0 h-full bg-gray-800 text-white p-4 w-60 */}
          <ul className="space-y-4 md:mt-36">
            <li>
              <Button variant={'custom'} size={'custom'} onClick={() => navigate('/faq')}>
                FAQ
              </Button>
            </li>
            {isAuth === 'true' ? (
              <>
                <li>
                  <Button variant={'custom'} size={'custom'} onClick={handleLogout} disabled={logOutLoading}>
                    Logout
                  </Button>
                </li>
                <li>
                  <Button variant={'custom'} size={'custom'} onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button variant={'custom'} size={'custom'} onClick={() => navigate('/login')}>
                    Login/signup
                  </Button>
                </li>
                <li>
                  <Button variant={'custom'} size={'custom'} onClick={() => navigate('/signup')}>
                    Buy Ticket
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
