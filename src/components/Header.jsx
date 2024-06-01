import React from 'react';
import { FaHome, FaSearch, FaBook } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold">Spotify Clone</div>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="flex items-center space-x-1 hover:text-green-500">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="/search" className="flex items-center space-x-1 hover:text-green-500">
            <FaSearch />
            <span>Search</span>
          </a>
          <a href="/library" className="flex items-center space-x-1 hover:text-green-500">
            <FaBook />
            <span>Your Library</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
