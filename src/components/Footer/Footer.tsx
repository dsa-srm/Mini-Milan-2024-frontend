import React from 'react';
import srmlogo from '../../assets/srm.png';
import navlogo from '../../assets/navLogo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import the appropriate React icons

const Footer = () => {
  return (
    <footer className="footer items-center p-4 py-16 md:py-24 bg-[#1f112c] text-neutral-content">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
        {/* University Logo */}
        <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-start w-full">
          <img
            src={srmlogo} // Replace with the path to your university logo PNG
            alt="University Logo"
            className=" h-32 mr-2"
          />
        </div>

        {/* Cultural Logo */}
        <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-center  w-full">
          <img
            src={navlogo} // Replace with the path to your cultural logo PNG
            alt="Cultural Logo"
            className=" h-32"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center md:justify-end  w-full gap-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-400"
          >
            <FaFacebook />
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-red-400"
          >
            <FaYoutube />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          
        </div>
        <div className="flex justify-center w-full  md:hidden">
          <a
            href="https://srmmilan.org/privacy-policy/"
            className="text-lg text-neutral-600 hover:text-neutral-700 mr-4"
          >
            Privacy Policy
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
