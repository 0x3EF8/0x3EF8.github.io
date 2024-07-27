import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaFacebook } from 'react-icons/fa';
import pfp from '../../assets/images/ico.png';
import '../../styles/index.css';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a
            href="/"
            className="flex items-center space-x-2 hover:text-gray-100 dark:hover:text-slate-100">
            <div className="rounded-full bg-logo-dark p-2 overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={pfp} alt="Logo" className="h-8 w-8 rounded-full" />
            </div>
            <span className="text-lg font-bold">0x3EF8</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/0x3ef8"
            className="text-base-content hover:text-primary transition-colors duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/0x3ef8"
            className="text-base-content hover:text-primary transition-colors duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://open.spotify.com/user/0x3ef8"
            className="text-base-content hover:text-primary transition-colors duration-300">
            <FaSpotify className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/your-profile-url"
            className="text-base-content hover:text-primary transition-colors duration-300">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
