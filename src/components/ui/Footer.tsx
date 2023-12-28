import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">&#169; Copyright 2023, Directorate of Student Affairs, SRMIST
        <a href="https://www.instagram.com/srmist_milan/" className="hover:text-gray-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/srmmilan/" className="hover:text-gray-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/company/srmmilan/" className="hover:text-gray-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/srmist" className="hover:text-gray-500">
          <FaYoutube size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
